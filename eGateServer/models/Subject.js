var mongoose = require('mongoose')

var SubjectSchema = new mongoose.Schema({
    id:String,
    title:String,
    updated:{type:Date , default:Date.now}
})
module.exports = mongoose.model('Subject' , SubjectSchema)