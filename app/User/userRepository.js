const User = require('./User')

const findUser = async (email, password) => {
    const foundUser = await User.findByCredentials(email, password)
    return foundUser
}

const addUser = async (user) => {
    const newUser = new User(user)
    await newUser.save()
    return newUser
}

module.exports = {findUser, addUser}