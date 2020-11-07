var mongoose = require('mongoose')

var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
const cors = require('cors')
var daoPost = require('../dao/daoPost')
var daoSubject = require('../dao/daoSubject')
var daoTitle = require('../dao/daoTitle')

app.use(cors())
app.options('*',cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.disable('etag');


mongoose.connect('mongodb://localhost:27017/eStudyMaterial' , {
  promiseLibrary:require('bluebird'),
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(()=>console.log("Connection Successful"))
.catch((err)=>console.log(err))
 
app.use('/api/subject' , daoSubject)
app.use('/api/title' , daoTitle) 
app.use('/api/post' , daoPost)
 
app.listen(3000 , ()=>{
    console.log("Api Server  Started on Port : " + 3000)
})



module.exports = app;
