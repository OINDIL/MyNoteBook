const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
router.post('/',[ // here all the validations will be added
    body('name','Please enter a name of minimum 3 characters').isLength({min:3}),
    body('email','Please enter a valid email address').isEmail(),
    body('password','Please enter a password of minimum 8 characters').isLength({min:8}),
      
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user)).catch(err => {
        console.log(err)
        res.json({error:'Please enter a unique email'})
    })
    // res.send(req.body)
})
module.exports = router