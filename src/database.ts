let data: {farmOwners: farmOwner[], farms: farm[], workers: worker[], tractors: tractor[]} = {
    farmOwners: [],
    farms: [],
    workers: [],
    tractors: []
}

export type farmOwner = {
    id: number,
    pseudo: String,
    password: String
}

export type farm = {
    id: number,
    ownerId: number,
    name: String
}

export type worker = {
    id: number,
    farmId: number,
    name: String
}

export type tractor = {
    id:number,
    farmId:number,
    model: String
}

export default data