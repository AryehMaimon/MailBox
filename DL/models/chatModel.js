const mongoose = require('mongoose');
require('./userModel')
const msgSchema = new mongoose.Schema({
    
    
   from: {
    type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true,
    },
    date: {
     type: Date,
     default : Date.now
    },
    content:{
        type: String,
    },
    
  });

const chatSchema = new mongoose.Schema({
    
   subject: {
      type: String,
      required: true,
   },
   msg:[msgSchema],

    members: [
    {type:mongoose.Schema.Types.ObjectId,
   ref:'user'}
   ],
   
     lastDate: {
      type: Date,

     }
   });
   
   const chatModel = mongoose.model("chat", chatSchema);
   module.exports = chatModel;
   
   