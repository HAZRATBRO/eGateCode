var express = require('express')
var router = express.Router()
var post = require('../models/Post')


router.get('/' , function(req , res){
    post.find(function(err , posts){
        if(err) return next(err);
        res.json(posts)
    })
})

router.get('/:id' , function(req , res){
    post.findById( req.params.id , function(err , post){
        if(err) return next(err);
        res.json(post)
    })
})

router.post('/' , function(req , res){
    post.create(req.body , function(err , post){
        if(err) return next(err)
        res.json(post)
    })
})

router.post('/:id' , function(req , res){
    post.findByIdAndUpdate(req.params.id , req.body , function(err , post){
        if(err) return next(err)
        res.json(post)
    })
})
router.delete('/:id' , function(req , res){
    post.findByIdAndRemove(req.params.id , req.body , function(err , post){
        if(err) return next(err)
        res.json(post)
    })
})

module.exports = router;