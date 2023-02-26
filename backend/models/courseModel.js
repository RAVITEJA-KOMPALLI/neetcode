const mongoose  = require("mongoose")

const courseSchema = new mongoose.Schema({
    "title" : {type: String, unique: true, require: true},
    "level"  : {type: String},
    "createdAt" : {type: Date, default: Date.now}
});

module.exports = mongoose.model("course", courseSchema)