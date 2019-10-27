const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const routes = require('./app/routes')
const bodyParser = require('body-parser')
const connectDB = require('./database/database')

    connectDB()

    app.use(bodyParser.json())

    app.use(routes)

    app.listen(port, ()=> {
        console.log("server up and running")
    })

    

