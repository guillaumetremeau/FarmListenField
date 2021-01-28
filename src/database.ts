let data: {
    farmOwners: farmOwner[],
    farms: farm[],
    workers: worker[],
    tractors: tractor[],
    cropZones: cropZone[],
    activities: activity[]
} = {
    farmOwners: [],
    farms: [],
    workers: [],
    tractors: [],
    cropZones: [],
    activities: []
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

export type cropZone = {
    id: number,
    farmId: number,
    size: number,
    name: String
}

export type activity = {
    id: number,
    cropZoneId: number,
    date: Date,
    activityType: activityType,
    cropType: cropType,
    tractorId: number | undefined,
    workerId: number
}

export enum activityType {
    SoilPreparation = "SoilPreparation",
    Sowing = "Sowing",
    Fertilizing = "Fertilizing",
    Harvesting = "Harvesting"
}

export enum cropType {
    Cassava = "Cassava",
    Sugarcane = "Sugarcane",
    Corn = "Corn",
    Rice = "Rice"
}

export default data