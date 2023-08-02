// need to connect to MongoDb using node js
const mongoose = require('mongoose') // this includes the mongoose framework
const mongoURI = 'mongodb://127.0.0.1:27017/myNotebook'

const connectToMongo = async () =>{ // because mongoose returns promises
    try{
        mongoose.connect(mongoURI)
        console.log('connected to mongo successfully')
    } catch(err){
        console.log(err)
    }
}
module.exports = connectToMongo // exporting it to get access from other components
