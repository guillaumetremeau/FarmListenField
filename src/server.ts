import express from 'express'
import { graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'
import fillDummyData from './dummyData'
import ActivityResolver from './resolvers/ActivityResolver'
import CropZoneResolver from './resolvers/CropZoneResolver'
import FarmOwnerResolver from './resolvers/FarmOwnerResolver'
import FarmResolver from './resolvers/FarmResolver'
import TractorResolver from './resolvers/TractorResolver'
import WorkerResolver from './resolvers/WorkerResolver'
import { ActivityMutation, ActivityQuery, ActivityTypes } from './schema/Activity'
import { CropZoneMutation, CropZoneQuery, CropZoneTypes } from './schema/CropZone'
import { FarmMutation, FarmQuery, FarmTypes } from './schema/Farm'
import { FarmOwnerMutation, FarmOwnerQuery, FarmOwnerTypes } from './schema/FarmOwner'
import { TractorMutation, TractorQuery, TractorTypes } from './schema/Tractor'
import { WorkerMutation, WorkerQuery, WorkerTypes } from './schema/Worker'

// Login info / TODO improved security
export let logInfo:{isLogged: boolean, userId: number} = {
    isLogged: false,
    userId: -1
}
// GraphQL Schema
let schema = buildSchema(`
    type Query {
        ${ActivityQuery}
        ${CropZoneQuery}
        ${FarmOwnerQuery}
        ${FarmQuery}
        ${TractorQuery}
        ${WorkerQuery}
    }
    type Mutation {
        ${ActivityMutation}
        ${CropZoneMutation}
        ${FarmOwnerMutation}
        ${FarmMutation}
        ${TractorMutation}
        ${WorkerMutation}
    }
    ${ActivityTypes}
    ${CropZoneTypes}
    ${FarmOwnerTypes}
    ${FarmTypes}
    ${TractorTypes}
    ${WorkerTypes}
`)

let root = {
    ...ActivityResolver,
    ...CropZoneResolver,
    ...FarmOwnerResolver,
    ...FarmResolver,
    ...TractorResolver,
    ...WorkerResolver
}

// Use to fill in some dummy data
fillDummyData()

// Create an express server and graphql endpoint
let app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => console.log('Express GraphQL Server now running on localhost:4000/graphql'))