const express = require('express');
const router = express.Router();
const fetchuser = require("../MiddleWare/fetchuser")
router.get('/fetchallnotes',fetchuser, async (req,res)=>{

    res.json([])
})
module.exports = router