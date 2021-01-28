let data: {coursesData: Course[]} = {
    coursesData: []
}

export type Course = {
    id: number,
    title: String,
    author: String,
    description: String,
    topic: String,
    url: String
}

export default data