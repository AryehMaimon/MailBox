const userModel = require('../models/userModel');




// add new user 
async function create(data) {
    let newUser = await userModel.create(data);
    return newUser;
}


// get all users:
async function read() {
    let users = await userModel.find();
    return users;
}

// read one user
async function readOne(filter) {
    let user = await userModel.findOne(filter)
    return user
}

// update by filter
async function updateUser(filter, data) {
    let userToUpdate = await userModel.updateOne(filter, data, {new: true})
    return userToUpdate;
}

async function updateOneByFilter(filter, data) {
    let userToUpdate = await userModel.updateOne(filter, data, { new: true })
    return userToUpdate;
}

module.exports = { create, read, readOne, updateUser, updateOneByFilter }