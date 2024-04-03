const msgModel = require('../models/msgModel');




// add new msg 
async function create(data) {
    let newmsg = await msgModel.create(data);
    return newmsg;
}


// get all msgs:
async function read() {
    let msgs = await msgModel.find();
    return msgs;
}

// read one msg
async function readOne(filter) {
    let msg = await msgModel.findOne(filter)
    return msg
}

// update by filter
async function updatemsg(filter, data) {
    let msgToUpdate = await msgModel.updateOne(filter, data, {new: true})
    return msgToUpdate;
}

async function updateOneByFilter(filter, data) {
    let msgToUpdate = await msgModel.updateOne(filter, data, { new: true })
    return msgToUpdate;
}

module.exports = { create, read, readOne, updatemsg, updateOneByFilter }