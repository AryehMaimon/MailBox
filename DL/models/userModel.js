const mongoose = require('mongoose');
require ('./chatModel')

const userSchema = new mongoose.Schema({
        
    email: {
        type: String,
        unique: true,
        required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password:{
        type: String,
        select: false,
    },
    avatar: {
      type: String,
    },
  chats : [{
 
   chat: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'chat'
  },
  isSent: Boolean,
        isRecieved: Boolean,
        isFavorite: Boolean,
        isDeleted: Boolean,
        isDraft: Boolean,
        isRead: { type: Boolean, default: false },
        labels: [String]
   

}],
isActive: {
  type: Boolean,
  default: true
} 
  });
  
  const userModel = mongoose.model("user", userSchema);
  module.exports = userModel;
  
  