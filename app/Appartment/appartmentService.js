const axios = require('axios')

const getTenant = async () => {
    try {
        const tenant = await axios.get('https://swapi.co/api/people/1/')
        return tenant.data
    } catch (err) {
        console.log(err)
    }
    
}

module.exports = {getTenant}