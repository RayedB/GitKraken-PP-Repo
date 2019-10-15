const Appartment = require('./appartment')

const index = (req,res) => {
    const data = Appartment.list()
    res.json(data)
}

const show = (req,res) => {
    const appartment = Appartment.get(req.params.id)
    res.json(appartment)
}

const create = (req,res) => {
    const appartments = Appartment.insert(req.body)
    res.json(appartments)
}

module.exports = {index, show, create}