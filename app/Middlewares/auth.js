const jwt = require('jsonwebtoken')
const User = require('../User/User')

const auth = async(req, res, next) => {
    if (req.header('Authorization')) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            const data = jwt.verify(token, 'secret')
            next()
        } catch (error) {
            res.status(401).send({ error: 'Not authorized to access this resource' })
        }
    } else {
        res.status(400).send({error: 'Token missing'})
    }
    
    

}
module.exports = auth