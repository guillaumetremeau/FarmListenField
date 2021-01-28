import data from "./database"

function fillDummyData() {
    data.coursesData = [
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
    
    console.log(data)
}

export default fillDummyData