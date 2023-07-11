const mongoose = require('mongoose');

const notesScema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        defualt:'general'
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('notes', notesScema);
