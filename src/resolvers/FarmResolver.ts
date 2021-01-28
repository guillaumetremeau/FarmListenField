import data from "../database"
import { logInfo } from "../server"

let count = 0

let getFarm = () => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length >= 1){
        return farms[0]
    } else throw new Error("You don't have any farm, please create a farm first");
}
let postFarm = (args:{name: string}) => {
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if (farms.length === 0) {
        //Create Farm
        let id = count
        count++
        data.farms.push({
            id: id,
            ownerId: logInfo.userId,
            name: args.name
        })
        return data.farms.filter(farm => farm.id === id)[0]
    } else throw new Error("You already have a farm");
    
}


const FarmResolver = {
    farm: getFarm,
    createFarm: postFarm
}

export default FarmResolver