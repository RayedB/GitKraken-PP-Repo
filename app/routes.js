const express = require('express')
const router = express.Router()
const {index,show,create} = require('./Appartment/appartmentController')

router.get('/', (req,res) => {
    res.send("hello world")
})

router.get('/appartments', index)
router.get('/appartments/:id',show)
router.post('/appartments/', create)
router.put('/appartments/:id', (req,res) => {
    res.send("hello world")
})
router.delete('/appartments/:id', (req,res) => {
    res.send("hello world")
})

module.exports = router