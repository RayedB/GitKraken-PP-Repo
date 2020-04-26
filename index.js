const express = require('express')
const app = express()
const routes = require('./app/routes')
const bodyParser = require('body-parser')
// Test
const {connectDB} = require('./database/database')

connectDB()

app.use(bodyParser.json())

app.use(routes)

app.listen(8080, ()=> {
    console.log("server up and running")
})