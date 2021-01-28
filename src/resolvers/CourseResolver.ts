import data from "../database"


let getCourse = function(args: any) {
    let id = args.id
    return data.coursesData.filter(course => {
        return course.id == id
    })[0]
}
let getCourses= function(args:any) {
    if(args.topic) {
        let topic = args.topic
        return data.coursesData.filter(courses => courses.topic === topic)
    } else {
        return data.coursesData
    }
}
let updateCourseTopic = function(args:{id: number, topic: string}) {
    data.coursesData.map(course => {
        if(course.id === args.id) {
            course.topic = args.topic
            return course
        }
    })
    return data.coursesData.filter(course => course.id === args.id)[0]
}

//Resolver
const CourseResolver  = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
}

export default CourseResolver