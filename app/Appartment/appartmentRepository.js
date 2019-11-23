const Appartment = require('./Appartment')
const {getTenant} = require('./appartmentService')

const list = async () => {
    const data = await Appartment.find({})
    return data
}

const get = async id => {

    const appartment = Appartment.get(id)
    const tenant = await getTenant()
    const appartmentAndTenant = {
        ...appartment,
        tenant 
    }
    return appartmentAndTenant
}

const insert = appartment => {
    const appartmentToPersist = {
        address: appartment.address,
        size: appartment.size,
        zip: appartment.zip,
        neighborhood: appartment.neighborhood,
        city: appartment.city
    }
    const persistedAppartment = new Appartment(appartmentToPersist)
    persistedAppartment.save()
    
}


module.exports = {list,get, insert}