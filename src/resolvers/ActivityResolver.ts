import data, { activityType, cropType } from "../database";
import { logInfo } from "../server";

let count = 0

let getActivities = () => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        return data.activities.filter(activity => {
            let cropZones = data.cropZones.filter(cropZone => cropZone.farmId === farms[0].id)
            let activities = cropZones.filter(cropZone => cropZone.id === activity.cropZoneId)
            return (activities.length > 0)
        })
    } else throw new Error("You don't have any farm");
}
let getActivity = (args: {id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let activities = data.activities.filter(activity => activity.id === args.id)
        if(activities.length === 1){
            let cropZones = data.cropZones.filter(cropZone => cropZone.id === activities[0].cropZoneId)
            if(cropZones.length > 0 && cropZones[0].farmId === farms[0].id){
                return activities[0]
            } else throw new Error("There is no such activity in your farm");
            
        } else throw new Error("There is no such activity");
        
    } else throw new Error("You don't have any farm");
}
let addActivity = (args:{cropZoneId: number, date: string, activityType: activityType, cropType: cropType, workerId: number, tractorId: number|undefined}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let cropZones = data.cropZones.filter(cropZone => cropZone.id === args.cropZoneId)
        if(cropZones.length === 1){
            if(cropZones[0].farmId !== farms[0].id) throw new Error("This crop zone is not yours");
            
            let id = count
            count++
            data.activities.push({
                id: id,
                cropZoneId: cropZones[0].id,
                date: new Date(args.date),
                activityType: args.activityType,
                cropType: args.cropType,
                workerId: args.workerId,
                tractorId: args.tractorId
            })
            return data.activities.filter(activity => activity.id === id)[0]
        } else throw new Error("This crop zone does not exist");
        
    } else throw new Error("You don't have any farm");
}
let deleteActivity = (args:{id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let activities = data.activities.filter(activity => activity.id === args.id)
        if(activities.length === 1){
            let cropZones = data.cropZones.filter(cropZone => cropZone.id === activities[0].cropZoneId)
            if(cropZones.length > 0 && cropZones[0].farmId === farms[0].id){
                data.activities = data.activities.filter(activity => activity.id !== args.id)

                return data.activities.filter(activity => {
                    let cropZones = data.cropZones.filter(cropZone => cropZone.farmId === farms[0].id)
                    let activities = cropZones.filter(cropZone => cropZone.id === activity.cropZoneId)
                    return (activities.length > 0)
                })
            } else throw new Error("There is no such activity in your farm");
            
        } else throw new Error("There is no such activity");

    } else throw new Error("You don't have any farm");
}
let editActivity = (args:{id:number, cropZoneId: number, date: string, activityType: activityType, cropType: cropType, workerId: number, tractorId: number|undefined}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let activities = data.activities.filter(activity => activity.id === args.id)
        if(activities.length === 1){
            let cropZones = data.cropZones.filter(cropZone => cropZone.id === activities[0].cropZoneId)
            if(cropZones.length > 0 && cropZones[0].farmId === farms[0].id){
                data.activities = data.activities.filter(activity => activity.id !== args.id)
                data.activities.push({
                    id: activities[0].id,
                    cropZoneId: cropZones[0].id,
                    date: new Date(args.date),
                    activityType: args.activityType,
                    cropType: args.cropType,
                    workerId: args.workerId,
                    tractorId: args.tractorId
                })

                return data.activities.filter(activity => activity.id === activities[0].id)[0]
            } else throw new Error("There is no such activity in your farm");
            
        } else throw new Error("There is no such activity");

    } else throw new Error("You don't have any farm");
}
// Expense calculation
let summary = (args: {startDate: string, endDate: string}) => {
    let activities = getActivities()
    let sum = 0
    let startDate: number = new Date(args.startDate).getTime()
    let endDate: number = new Date(args.endDate).getTime()
    // Select activities in the interval
    activities = activities.filter(activity => 
        (activity.date.getTime() >= startDate && activity.date.getTime() <= endDate))
    activities.forEach(activity => {
        let size = data.cropZones.filter(cropZone => cropZone.id === activity.cropZoneId)[0].size
        switch (activity.activityType) {
            case activityType.SoilPreparation:
                sum += 10*size
                break;
            case activityType.Sowing:
                sum += 20*size
                break;
            case activityType.Fertilizing:
                sum += 30*size
                break;
            case activityType.Harvesting:
                sum += 100*size
                break;     
            default:
                break;
        }         
    })

    return sum
}

const ActivityResolver = {
    activities: getActivities,
    activity: getActivity,
    addActivity: addActivity,
    deleteActivity: deleteActivity,
    editActivity: editActivity,
    summary: summary
}

export default ActivityResolver