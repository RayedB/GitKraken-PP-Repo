const Appartment = require('./appartment')
const {getTenant} = require('./appartmentService')

const list = () => {
    return
}

const get = async id => {

    const appartment = await Appartment.findByPk(id)
    return appartment
}

const insert = async appartment => {
    const appt = await Appartment.create({ address: appartment.address, size: appartment.size, zip: appartment.zip })
    console.log("Appartment's    auto-generated ID:", appt.id);
    return appt
}


module.exports = {list,get, insert}