const mongoose = require('mongoose');

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
        required: true,
    },
    
  });
  
  const msgModel = mongoose.model("msg", msgSchema);
  module.exports = msgModel;
  
  