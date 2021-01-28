export let WorkerQuery: string = `
    workers: [Worker]
    worker(id: Int!): Worker
`
export let WorkerMutation: string = `
    addWorker(name: String!): Worker
    deleteWorker(id: Int!): [Worker]
    editWorker(id: Int!, name: String!): Worker
`
export let WorkerTypes: string = `
    type Worker {
        id: Int
        farmId: Int
        name: String
    }
`