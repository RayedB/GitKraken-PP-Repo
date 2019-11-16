const Sequelize = require('sequelize')
const {sequelize} = require('../../database/database')

 const Appartment = sequelize.define('appartment', {
        // attributes
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        zip: {
          type: Sequelize.STRING
          // allowNull defaults to true
        },
        size: {
          type: Sequelize.INTEGER
          // allowNull defaults to true
        }
      }, {
        // options
      });

module.exports = Appartment