const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    
   subject: {
      type: String,
      required: true,
   },
    to: [
    {type:mongoose.Schema.Types.ObjectId,
   ref:'user'}
   ],
   
     msg:[
       {type:mongoose.Schema.Types.ObjectId,
      ref:'msg'}
   ],
     lastDate: {
      type: Date,

     }
   });
   
   const chatModel = mongoose.model("chat", chatSchema);
   module.exports = chatModel;
   
   