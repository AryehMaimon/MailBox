const mongoose = require('mongoose');


  
  const msgModel = mongoose.model("msg", msgSchema);
  module.exports = msgModel;
  
  