const mongoose = require('mongoose')
const connectDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("connected to DB")
    });
}

module.exports = connectDatabase
