const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
// A user is created here. No login required. POST 'api/auth/createuser'
router.post('/createuser',[ // here all the validations should be added
    body('name','Please enter a name of minimum 3 characters').isLength({min:3}),
    body('email','Please enter a valid email address').isEmail(),
    body('password','Please enter a password of minimum 8 characters').isLength({min:8}),
], async (req,res)=>{
    // If there are errors return with bad requests and the errors
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    try{
        let user = await User.findOne({email: req.body.email}) // this line will look for redundant email addresses
        if(user){
            return res.status(400).json({error: 'Sorry this email already exists'})
        }
        // creating a hash and salt 
        const salt = await bcrypt.genSalt(10)
        const secretPass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secretPass
        })
        res.json(user)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})
module.exports = router