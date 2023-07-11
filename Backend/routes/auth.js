const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    object = {
        name:'oindil',
        number: 69
    }
    res.json(object)
})
module.exports = router