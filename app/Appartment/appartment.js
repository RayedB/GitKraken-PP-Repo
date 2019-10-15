const data = require('../../database/appartmentSample.json')


const list = () => {
    return data
}

const get = (id) => {
    return data[id]
} 

const insert = (appartment) =>{
    data.push(appartment)
    return data
} 

module.exports = {list,get,insert}