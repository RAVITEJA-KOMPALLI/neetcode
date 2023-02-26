const courseModel = require("../models/courseModel")

module.exports.getAllCourses = async function(){
    return await courseModel.find({})

}

module.exports.createFirstCourse = async function(){
    const courses = courseModel.find({})
    if (courses && (await courses).length == 0){
        const firstCourse = {
            "title": "BZ DSA",
            "level": "easy"
        };
        const course = new courseModel(firstCourse);
        await course.save();
    }

}