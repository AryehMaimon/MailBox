const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        
    email: {
        type: String,
        required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar: {
      type: String,
    },
  chats : [{
 
   chat: {type:mongoose.Schema.Types.ObjectId,
   ref:'msg'
  },
        isSent: {
    type: Boolean,
    required: false,
},
isRecieved: {
   type: Boolean,
   default : false
},
isFavorite: {
   type: Boolean,
   default : false
},
isDeleted: {
   type: Boolean,
   default : false
},
}]
     
  });
  
  const userModel = mongoose.model("user", userSchema);
  module.exports = userModel;
  
  