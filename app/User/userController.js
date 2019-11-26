const userRepository = require('./userRepository')


const login = async (req,res) => {
    //Login a user
    try {
        const { email, password } = req.body
        const user = await userRepository.findUser(email,password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

const register = async (req,res) => {
    // Create a new user
    try {
        const user = await userRepository.addUser(req.body)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}




module.exports = {login, register}