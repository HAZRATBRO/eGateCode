var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PostSchema = new mongoose.Schema({
    id:String,
    title:{type:Schema.Types.ObjectId , ref:'Title'},
    subject:{type:Schema.Types.ObjectId , ref:'Subject'},
    postImgUrl:[
        {
            type:String
        }
    ],
    postContent:[
        {
            type:String
        }
    ],
    created:{type:Date},
    updated:{type:Date , default:Date.now}
})
module.exports = mongoose.model('Post' , PostSchema)