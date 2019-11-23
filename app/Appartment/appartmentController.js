const appartmentRepository = require('./appartmentRepository')
const index = async (req,res) => {
    const appartments = await appartmentRepository.list()
    res.json(appartments) 
}

const show = async (req,res) => {
    const appartment = await appartmentRepository.get(req.params.id - 1)
    
    res.json(appartment)
}

const create = (req,res) => {
    appartmentRepository.insert(req.body)
    // const appartments = appartmentRepository.list()
    res.end()
}

module.exports = {index, show, create}