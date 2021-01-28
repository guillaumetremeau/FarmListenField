export let FarmOwnerQuery: string = `help: String`
export let FarmOwnerMutation: string = `
    createFarmOwnerAccount(pseudo: String!, password: String!): FarmOwner
    login(pseudo: String!, password: String!): FarmOwner
`
export let FarmOwnerTypes: string = `
    type FarmOwner {
        id: Int
        pseudo: String
        password: String
    }
`