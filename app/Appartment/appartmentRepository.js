const Appartment = require('./appartment')
const {getTenant} = require('./appartmentService')

const list = () => {
    const data = Appartment.list()
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
    Appartment.insert(appartment)
    return appartment
}


module.exports = {list,get}