var express = require('express')
var router = express.Router()
var subject = require('../models/Subject')


router.get('/' , function(req , res){
    subject.find(function(err , subjects){
        if(err) return next(err);
        res.json(subjects)
    })
})

router.get('/:id' , function(req , res){
    subject.findById( req.params.id , function(err , subject){
        if(err) return next(err);
        res.json(subject)
    })
})

router.post('/' , function(req , res){
    subject.create(req.body , function(err , subject){
        console.log(subject)
        if(err) return next(err)
        res.json(subject)
    })
})

router.post('/:id' , function(req , res){
    subject.findByIdAndUpdate(req.params.id , req.body , function(err , subject){
        if(err) return next(err)
        res.json(subject)
    })
})
router.delete('/:id' , function(req , res){
    subject.findByIdAndRemove(req.params.id , req.body , function(err , subject){
        if(err) return next(err)
        res.json(subject)
    })
})

module.exports = router;