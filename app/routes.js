const express = require('express')
const router = express.Router()
const {index,show,create} = require('./Appartment/appartmentController')
const {login,logout,register} = require('./User/userController.js')
const auth = require('./Middlewares/auth')

router.get('/', (req,res) => {
    res.send("hello world")
})
// APPARTMENTS ROUTES
router.get('/appartments', auth, index)
router.get('/appartments/:id',show)
router.post('/appartments/', create)
router.put('/appartments/:id', (req,res) => {
    res.send("hello world")
})
router.delete('/appartments/:id', (req,res) => {
    res.send("hello world")
})


// USER ROUTES
router.post('/login',login)
router.post('/register',register)

//Webhook
router.post('/webhook', (req,res) => {
    console.log("branch",req)
    res.end()
})


module.exports = router