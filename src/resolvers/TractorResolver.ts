import data from "../database";
import { logInfo } from "../server";

let count = 0

let getTractors = () => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        return data.tractors.filter(tractor => tractor.farmId === farms[0].id)
    } else throw new Error("You don't have any farm");
}
let getTractor = (args: {id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let tractors = data.tractors.filter(tractor => tractor.id === args.id)
        if(tractors.length === 1){
            if(tractors[0].farmId === farms[0].id){
                return tractors[0]
            } else throw new Error("There is no such tractor in your farm");
            
        } else throw new Error("There is no such tractor");
        
    } else throw new Error("You don't have any farm");
}
let addTractor = (args:{model: string}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let id = count
        count++
        data.tractors.push({
            id: id,
            farmId: farms[0].id,
            model: args.model
        })
        return data.tractors.filter(tractor => tractor.id === id)[0]
    } else throw new Error("You don't have any farm");
}
let deleteTractor = (args:{id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let tractors = data.tractors.filter(tractor => tractor.id === args.id)
        if(tractors.length === 1){
            if(tractors[0].farmId === farms[0].id){
                data.tractors = data.tractors.filter(tractor => tractor.id !== args.id)
                return data.tractors.filter(tractor => tractor.farmId === farms[0].id)
            } else throw new Error("There is no such tractor in your farm");
            
        } else throw new Error("There is no such tractor");

    } else throw new Error("You don't have any farm");
}
let editTractor = (args:{id:number, model: string}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let tractors = data.tractors.filter(tractor => tractor.id === args.id)
        if(tractors.length === 1){
            if(tractors[0].farmId === farms[0].id){
                data.tractors = data.tractors.filter(tractor => tractor.id !== args.id)
                data.tractors.push({
                    id: tractors[0].id,
                    farmId: tractors[0].farmId,
                    model: args.model
                })
                return data.tractors.filter(tractor => tractor.id === tractors[0].id)[0]
            } else throw new Error("There is no such tractor in your farm");
            
        } else throw new Error("There is no such tractor");

    } else throw new Error("You don't have any farm");
}

const TractorResolver = {
    tractors: getTractors,
    tractor: getTractor,
    addTractor: addTractor,
    deleteTractor: deleteTractor,
    editTractor: editTractor
}

export default TractorResolver