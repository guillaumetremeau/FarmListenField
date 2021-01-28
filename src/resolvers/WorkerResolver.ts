import data from "../database";
import { logInfo } from "../server";

let count = 0

let getWorkers = () => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        return data.workers.filter(worker => worker.farmId === farms[0].id)
    } else throw new Error("You don't have any farm");
}
let getWorker = (args: {id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let workers = data.workers.filter(worker => worker.id === args.id)
        if(workers.length === 1){
            if(workers[0].farmId === farms[0].id){
                return workers[0]
            } else throw new Error("There is no such worker in your farm");
            
        } else throw new Error("There is no such worker");
        
    } else throw new Error("You don't have any farm");
}
let addWorker = (args:{name: string}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let id = count
        count++
        data.workers.push({
            id: id,
            farmId: farms[0].id,
            name: args.name
        })
        return data.workers.filter(worker => worker.id === id)[0]
    } else throw new Error("You don't have any farm");
}
let deleteWorker = (args:{id: number}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let workers = data.workers.filter(worker => worker.id === args.id)
        if(workers.length === 1){
            if(workers[0].farmId === farms[0].id){
                data.workers = data.workers.filter(worker => worker.id !== args.id)
                return data.workers.filter(worker => worker.farmId === farms[0].id)
            } else throw new Error("There is no such worker in your farm");
            
        } else throw new Error("There is no such worker");

    } else throw new Error("You don't have any farm");
}
let editWorker = (args:{id:number, name: string}) => {
    if(!logInfo.isLogged) throw new Error("Please log in first");
    let farms = data.farms.filter(farm => farm.ownerId === logInfo.userId)
    if(farms.length === 1){
        let workers = data.workers.filter(worker => worker.id === args.id)
        if(workers.length === 1){
            if(workers[0].farmId === farms[0].id){
                data.workers = data.workers.filter(worker => worker.id !== args.id)
                data.workers.push({
                    id: workers[0].id,
                    farmId: workers[0].farmId,
                    name: args.name
                })
                return data.workers.filter(worker => worker.id === workers[0].id)[0]
            } else throw new Error("There is no such worker in your farm");
            
        } else throw new Error("There is no such worker");

    } else throw new Error("You don't have any farm");
}

const WorkerResolver = {
    workers: getWorkers,
    worker: getWorker,
    addWorker: addWorker,
    deleteWorker: deleteWorker,
    editWorker: editWorker
}

export default WorkerResolver