import data from "./database"

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
}

export default fillDummyData