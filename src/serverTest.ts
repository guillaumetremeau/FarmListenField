import express from 'express'
import { graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'

// GraphQL Schema
let schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`)

let coursesData = [
    {
        id: 1,
        title: 'The complete Node.js Developer Course',
        author: 'Andrew Mead, rob Percival',
        description: 'Learn Node.js by building real-world applications with Node...',
        topic: 'Node.js',
        url: 'url'
    },
    {
        id: 2,
        title: 'Node.js',
        author: 'Brad',
        description: 'desc3',
        topic: 'Node.js',
        url: 'url'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding',
        author: 'Anthony',
        description: 'Advanced JavaScript Course',
        topic: 'JavaScript',
        url: 'url'
    }
]

let getCourse = function(args: any) {
    let id = args.id
    return coursesData.filter(course => {
        return course.id == id
    })[0]
}
let getCourses= function(args:any) {
    if(args.topic) {
        let topic = args.topic
        return coursesData.filter(courses => courses.topic === topic)
    } else {
        return coursesData
    }
}
let updateCourseTopic = function(args:{id: number, topic: string}) {
    coursesData.map(course => {
        if(course.id === args.id) {
            course.topic = args.topic
            return course
        }
    })
    return coursesData.filter(course => course.id === args.id)[0]
}

// Resolver
let root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
}

// Create an express server and graphql endpoint
let app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => console.log('Express GraphQL Server now running on localhost:4000/graphql'))