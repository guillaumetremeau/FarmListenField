import data from "../database"
import { logInfo } from "../server"

let count = 0

let createFarmOwnerAccount = function(args:{pseudo: string, password: string}) {
    if (data.farmOwners.filter(farmOwner => farmOwner.pseudo === args.pseudo).length === 0){
        let id = count
        count++
        data.farmOwners.push({
            id: id,
            pseudo: args.pseudo,
            password: args.password
        })
        return data.farmOwners.filter(farmOwner => farmOwner.id === id)[0]
    } else throw new Error("Pseudo already exist in database");
}
let login = function(args:{pseudo: string, password: string}){
    let ownerList = data.farmOwners.filter(farmOwner => farmOwner.pseudo === args.pseudo)
    if (ownerList.length === 1 && ownerList[0].password === args.password){
        // Login
        logInfo.isLogged = true
        logInfo.userId = ownerList[0].id
        return ownerList[0]
    } else throw new Error("Pseudo or password invalid");    
}

const FarmOwnerResolver = {
    createFarmOwnerAccount: createFarmOwnerAccount,
    login: login
}

export default FarmOwnerResolver