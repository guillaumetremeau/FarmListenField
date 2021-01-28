import express from 'express'
import { graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'
import CourseResolver from './resolvers/CourseResolver'
import fillDummyData from './dummyData'
import Course from './schema/Course'

// GraphQL Schema
let schema = buildSchema(Course)
let root = {...CourseResolver}

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