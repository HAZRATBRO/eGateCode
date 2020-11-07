var express = require('express')
var router = express.Router()
var title = require('../models/Title')


router.get('/' , function(req , res){
    title.find(function(err , titles){
        if(err) return next(err);
        res.json(titles)
    })
})

router.get('/:id' , function(req , res){
    title.findById( req.params.id , function(err , title){
        if(err) return next(err);
        res.json(title)
    })
})

router.post('/' , function(req , res){
    title.create(req.body , function(err , title){
        if(err) return next(err)
        res.json(title)
    })
})

router.post('/:id' , function(req , res){
    title.findByIdAndUpdate(req.params.id , req.body , function(err , title){
        if(err) return next(err)
        res.json(title)
    })
})
router.delete('/:id' , function(req , res){
    title.findByIdAndRemove(req.params.id , req.body , function(err , title){
        if(err) return next(err)
        res.json(title)
    })
})

module.exports = router;