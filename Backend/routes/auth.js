const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'Vv@9Sl¥4Jr£4Tq¥5-Cm¢1Zo4Pv£8Ei7'
const fetchuser = require("../MiddleWare/fetchuser")

// ROUTE - 1:  A user is created here. No login required. POST 'api/auth/createuser'
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
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, SECRET_KEY) // returns a jwt token and its synchronous
        res.json({authtoken})
    }catch(error){
        res.status(500).json({error: "Internal server Error"})
    }
})
//ROUTE - 2: A user is logged in here. No login required. POST 'api/auth/login
router.post('/login',[ // here all the validations should be added
body('email','Please enter a valid email address').isEmail(),
body('password','Password cannot be blank').exists()
], async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const {email,password} = req.body // fetching email and password from 'req.body'
    // checks if the email is valid or not
    try{
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: "Please enter valid credentials"})
        }
        
    // checks if the password is valid
        let passwordCompare = await bcrypt.compare(password, user.password) // compares the password that is given by the user and the stored password
        if(!passwordCompare){
            return res.status(400).json({error: "Please enter valid credentials"})
        }

        const data = { // sending the payload
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, SECRET_KEY) // returns a jwt token and its synchronous
        res.json({authtoken})

    }catch(error){
        res.status(500).json({error: "Internal server Error"})
    }
})

//ROUTE - 3: A user is fetched here.Login required. POST 'api/auth/getuser

router.post('/getuser',fetchuser, async (req,res)=>{
    try {
        userId = await req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }catch(error){
        res.status(500).json({error: "Internal server Error"})
    }
})

module.exports = router