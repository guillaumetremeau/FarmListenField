export let ActivityQuery: string = `
    activities: [Activity]
    activity(id: Int!): Activity
    summary(startDate: String!, endDate: String!): Float
`
export let ActivityMutation: string = `
    addActivity(cropZoneId: Int!, date: String!, activityType: ActivityType!, cropType: CropType!, workerId: Int!, tractorId: Int): Activity
    deleteActivity(id: Int!): [Activity]
    editActivity(id: Int!, cropZoneId: Int!, date: String!, activityType: ActivityType!, cropType: CropType!, workerId: Int!, tractorId: Int): Activity
`
export let ActivityTypes: string = `
    type Activity {
        id: Int
        cropZoneId: Int
        date: String
        activityType: ActivityType
        cropType: CropType,
        workerId: Int,
        tractorId: Int
    }
    enum ActivityType {
        SoilPreparation
        Sowing
        Fertilizing
        Harvesting
    }
    enum CropType {
        Cassava
        Sugarcane
        Corn
        Rice
    }
`