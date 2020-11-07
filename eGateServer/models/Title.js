var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var TitleSchema = new mongoose.Schema({
    id:String,
    title:String,
    subject:{type:Schema.Types.ObjectId , ref:'Subject'},
    updated:{type:Date , default:Date.now}
})
module.exports = mongoose.model('Title' , TitleSchema)