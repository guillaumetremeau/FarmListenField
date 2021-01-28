# FarmListenField

Possible Improvements:
- Use uuid
- Improve login security
- Use persistent data
- Create new app with a fancy and useful user interface
- Refactor some code (check login for example)
- Ensure that we don't change crop type in the planting process (after soil preparation)

## Doc
1. install dependencies `npm install`
2. to build use `npm run build`
3. to start use `npm run start`
4. go to 'localhost:4000/graphql' to access graphql endpoint (it uses graphiql)

### Farm Owner
- createFarmOwner           // Create a Farm Owner account
- login                     // Login to a farm Owner Account
### Farm
- farm                      // Get the farm info
- createFarm                // Create farm
### Worker
- workers: [Worker]
- worker(id: Int!): Worker
- addWorker(name: String!): Worker
- deleteWorker(id: Int!): [Worker]
- editWorker(id: Int!, name: String!): Worker

```
type Worker {
    id: Int
    farmId: Int
    name: String
}
```
### Tractor
- tractors
- tractor
- addTractor
- editTractor
- deleteTractor
### CropZone
- cropZones
- cropZone
- addCropZone
- editCropZone
- deleteCropZone
### Activity
- activities: [Activity]    // Get Activities
- activity(id: Int!): Activity
- addActivity(cropZoneId: Int!, date: String!, activityType: ActivityType!, cropType: CropType!, workerId: Int!, tractorId: Int): Activity
- deleteActivity(id: Int!): [Activity]
- editActivity(id: Int!, cropZoneId: Int!, date: String!, activityType: ActivityType!, cropType: CropType!, workerId: Int!, tractorId: Int): Activity
### Summary
- summary(startDate: String!, endDate: String!): Float