export let FarmQuery: string = `
    farm: Farm
`
export let FarmMutation: string = `
    createFarm(name: String!): Farm
`
export let FarmTypes: string = `
    type Farm {
        id: Int
        ownerId: Int
        name: String
    }
`