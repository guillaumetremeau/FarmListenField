# FarmListenField
This project uses *GraphQL* and *TypeScript*
## Doc
How to build and run the project
1. install dependencies `npm install`
2. to build use `npm run build`
3. to start use `npm run start`
4. go to 'localhost:4000/graphql' to access graphql endpoint (it uses *graphiql* if you run on your browser)

### Farm Owner
- createFarmOwnerAccount(pseudo: String!, password: String!): FarmOwner  // Create a Farm Owner account
- login(pseudo: String!, password: String!): FarmOwner // Login to a farm Owner Account
```
type FarmOwner {
    id: Int
    pseudo: String
    password: String
}
```
### Farm
- farm: Farm                      // Get the farm info
- createFarm(name: String!): Farm                // Create a farm (only one per owner)
```
type Farm {
    id: Int
    ownerId: Int
    name: String
}
```
### Worker
- workers: [Worker] // Get a list of workers of your farm
- worker(id: Int!): Worker // Get a specific worker
- addWorker(name: String!): Worker // Add a worker
- deleteWorker(id: Int!): [Worker] // delete a worker
- editWorker(id: Int!, name: String!): Worker // edit a worker

```
type Worker {
    id: Int
    farmId: Int
    name: String
}
```
### Tractor
- tractors: [Tractor] // Get a list of your tractors
- tractor(id: Int!): Tractor // Get a specific tractor info
- addTractor(model: String!): Tractor // Add a tractor
- deleteTractor(id: Int!): [Tractor] // delete a tractor
- editTractor(id: Int!, model: String!): Tractor // edit a tractor
```
type Tractor {
    id: Int
    farmId: Int
    model: String
}
```
### CropZone
- cropZones: [CropZone] // Get a list a your crap zones
- cropZone(id: Int!): CropZone // Get a specific crop zone info
- addCropZone(size: Float!, name: String!): CropZone // add a crop zone (size in square/meters)
- deleteCropZone(id: Int!): [CropZone] // delete a crop zone
- editCropZone(id: Int!, size: Float!, name: String!): CropZone // edit a crop zone (size in square/meters)
```
type CropZone {
    id: Int
    farmId: Int
    name: String
    size: Float
}
```
### Activity
- activities: [Activity]    // Get all Activities
- activity(id: Int!): Activity // Get a specific activity
- addActivity(cropZoneId: Int!, date: String!, activityType: ActivityType!, cropType: CropType!, workerId: Int!, tractorId: Int): Activity // Add an activity
- deleteActivity(id: Int!): [Activity] // delete an activity
- editActivity(id: Int!, cropZoneId: Int!, date: String!, activityType: ActivityType!, cropType: CropType!, workerId: Int!, tractorId: Int): Activity // edit an activity

```
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
```
### Summary
- summary(startDate: String!, endDate: String!): Float // Calculate the expenses summary of your activities (in Baht)
##
Possible Improvements:
- Use uuid
- Improve login security
- Use persistent data
- Create new app with a fancy and useful user interface
- Refactor some code (check login for example)
- Ensure that we don't change crop type in the planting process (after soil preparation)
