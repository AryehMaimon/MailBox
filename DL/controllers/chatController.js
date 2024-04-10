const chatModel = require('../models/chatModel');




// add new chat 
async function create(data) {
    let newchat = await chatModel.create(data);
    return newchat;
}


// get all chats:
async function read(filter) {
    let chats = await chatModel.find(filter);
    return chats;
}

// read one chat
async function readOne(filter) {
    let chat = await chatModel.findOne(filter)
    return chat
}

// update by filter
async function updatechat(filter, data) {
    let chatToUpdate = await chatModel.updateOne(filter, data, {new: true})
    return chatToUpdate;
}

async function updateOneByFilter(filter, data) {
    let chatToUpdate = await chatModel.updateOne(filter, data, { new: true })
    return chatToUpdate;
}

module.exports = { create, read, readOne, updatechat, updateOneByFilter }