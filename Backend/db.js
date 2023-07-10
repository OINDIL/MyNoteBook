const mongoose = require('mongoose')
const mongoURI = 'mongodb://0.0.0.0:27017'

const connnectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log(error);
    }
};
module.exports = connnectToMongo;