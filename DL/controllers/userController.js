const userModel = require("../models/userModel");

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

// read one user chats

async function readOne(filter, populate) {
  let data = await userModel.findOne(filter);
  console.log('data:1');
 
  if (populate && populate.chats) {
      console.log('data:2');
  
    data = await data.populate("chats.chat");
    }
    console.log('data:3', data);
    
    if (populate && populate.users){
        
        data = await data.populate({
            path: "chats.chat.members",
            select: "fullName avatar",
        });}
        console.log('data:4');

  return data.toObject();
}

// update by filter
async function updateUser(filter, data) {
  let userToUpdate = await userModel.updateOne(filter, data, { new: true });
  return userToUpdate;
}

async function updateOneByFilter(filter, data) {
  let userToUpdate = await userModel.updateOne(filter, data, { new: true });
  return userToUpdate;
}

module.exports = { create, read, readOne, updateUser, updateOneByFilter };
