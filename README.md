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
- workers
- worker
- addWorker
- editWorker
- deleteWorker
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
- activities
- activity
- addActivity
- editActivity
- deleteActivity
### Summary
- summary