const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://rayed:password@localhost:5432/test');

const connectDB = async () => {
    try {
       await sequelize.authenticate()
       console.log('Connection has been established successfully.');
       sequelize.sync()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {connectDB, sequelize}