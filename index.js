require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/mongoose') 

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', require('./routes'));


const start = async () => {
    try {
        await connectDB(process.env.DATABASEURL)
        console.log('Connected with db')
        app.listen(PORT, console.log(`Server is running on ${PORT}`))
    } catch(err) {
        console.log(err);

    }
}

start();
