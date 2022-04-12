const mongoose = require('mongoose');

const connectDB = (connectionString) => {
    return mongoose.connect(connectionString, { 
        useNewURLParser: true
    })
}


module.exports = connectDB;