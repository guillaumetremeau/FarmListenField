export let CropZoneQuery: string = `
    cropZones: [CropZone]
    cropZone(id: Int!): CropZone
`
export let CropZoneMutation: string = `
    addCropZone(size: Float!, name: String!): CropZone
    deleteCropZone(id: Int!): [CropZone]
    editCropZone(id: Int!, size: Float!, name: String!): CropZone
`
export let CropZoneTypes: string = `
    type CropZone {
        id: Int
        farmId: Int
        name: String
        size: Float
    }
`