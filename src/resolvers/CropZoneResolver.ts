import data from "../database";
import { logInfo } from "../server";

let count = 0

let getCropZones = () => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        return data.cropZones.filter(cropZone => cropZone.farmId === farms[0].id)
    } else throw new Error("You don't have any farm");
}
let getCropZone = (args: {id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let cropZones = data.cropZones.filter(cropZone => cropZone.id === args.id)
        if(cropZones.length === 1){
            if(cropZones[0].farmId === farms[0].id){
                return cropZones[0]
            } else throw new Error("There is no such cropZone in your farm");
            
        } else throw new Error("There is no such cropZone");
        
    } else throw new Error("You don't have any farm");
}
let addCropZone = (args:{size: number, name: string}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let id = count
        count++
        data.cropZones.push({
            id: id,
            farmId: farms[0].id,
            size: args.size,
            name: args.name
        })
        return data.cropZones.filter(cropZone => cropZone.id === id)[0]
    } else throw new Error("You don't have any farm");
}
let deleteCropZone = (args:{id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let cropZones = data.cropZones.filter(cropZone => cropZone.id === args.id)
        if(cropZones.length === 1){
            if(cropZones[0].farmId === farms[0].id){
                data.cropZones = data.cropZones.filter(cropZone => cropZone.id !== args.id)
                return data.cropZones.filter(cropZone => cropZone.farmId === farms[0].id)
            } else throw new Error("There is no such crop zone in your farm");
            
        } else throw new Error("There is no such crop zone");

    } else throw new Error("You don't have any farm");
}
let editCropZone = (args:{id:number, name: string, size: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let cropZones = data.cropZones.filter(cropZone => cropZone.id === args.id)
        if(cropZones.length === 1){
            if(cropZones[0].farmId === farms[0].id){
                data.cropZones = data.cropZones.filter(cropZone => cropZone.id !== args.id)
                data.cropZones.push({
                    id: cropZones[0].id,
                    farmId: cropZones[0].farmId,
                    name: args.name,
                    size: args.size
                })
                return data.cropZones.filter(cropZone => cropZone.id === cropZones[0].id)[0]
            } else throw new Error("There is no such crop zone in your farm");
            
        } else throw new Error("There is no such crop zone");

    } else throw new Error("You don't have any farm");
}

const CropZoneResolver = {
    cropZones: getCropZones,
    cropZone: getCropZone,
    addCropZone: addCropZone,
    deleteCropZone: deleteCropZone,
    editCropZone: editCropZone
}

export default CropZoneResolver