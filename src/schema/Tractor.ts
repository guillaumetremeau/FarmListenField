export let TractorQuery: string = `
    tractors: [Tractor]
    tractor(id: Int!): Tractor
`
export let TractorMutation: string = `
    addTractor(model: String!): Tractor
    deleteTractor(id: Int!): [Tractor]
    editTractor(id: Int!, model: String!): Tractor
`
export let TractorTypes: string = `
    type Tractor {
        id: Int
        farmId: Int
        model: String
    }
`