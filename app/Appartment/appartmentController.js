const appartmentRepository = require('./appartmentRepository')
const index = (req,res) => {
    const appartments = appartmentRepository.list()
    res.json(appartments) 
}

const show = async (req,res) => {
    const appartment = await     appartmentRepository.get(req.params.id)
    
    res.json(appartment)
}

const create = (req,res) => {
    appartmentRepository.insert(req.body)
    const appartments = appartmentRepository.list()
    res.json(appartments)
}

module.exports = {index, show, create}