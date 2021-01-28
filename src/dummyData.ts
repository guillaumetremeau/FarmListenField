import data, { activityType, cropType } from "./database"

// Use to fill in dummy data for testing
function fillDummyData() {
    data.farmOwners = [{
        id:500,
        pseudo:"John",
        password:"doe"
    }],
    data.farms = [{
        id:500,
        ownerId: 500,
        name: "Farm of John doe"
    }],
    data.workers = [{
        id:500,
        farmId:500,
        name:"Martin George"
    },{
        id: 501,
        farmId: 500,
        name: "Fil Mathias"
    }]
    data.tractors = [{
        id: 500,
        farmId:500,
        model:"Tractout"
    }]
    data.cropZones = [{
        id:500,
        farmId:500,
        size:10,
        name:"Zone east"
    },{
        id:501,
        farmId:500,
        size:17,
        name:"Zone south"
    },{
        id:502,
        farmId:500,
        size:50,
        name:"Zone west"
    }]
    data.activities =[{
        id: 500,
        cropZoneId: 500,
        date: new Date("2020/01/01"),
        activityType: activityType.SoilPreparation,
        cropType: cropType.Cassava,
        workerId: 500,
        tractorId: 500
    },
    {
        id: 501,
        cropZoneId: 500,
        date: new Date("2020/02/01"),
        activityType: activityType.Sowing,
        cropType: cropType.Cassava,
        workerId: 500,
        tractorId: undefined
    },
    {
        id: 502,
        cropZoneId: 500,
        date: new Date("2020/03/01"),
        activityType: activityType.Fertilizing,
        cropType: cropType.Cassava,
        workerId: 500,
        tractorId: undefined
    },
    {
        id: 503,
        cropZoneId: 500,
        date: new Date("2020/04/01"),
        activityType: activityType.Harvesting,
        cropType: cropType.Cassava,
        workerId: 500,
        tractorId: 500
    },{
        id: 504,
        cropZoneId: 501,
        date: new Date("2021/01/01"),
        activityType: activityType.SoilPreparation,
        cropType: cropType.Sugarcane,
        workerId: 501,
        tractorId: 500
    }]
}

export default fillDummyData