const express = require("express");
const router = express.Router();
const chatService = require("../BL/chatService");

// ***get all chats of user

// *user id is hard coded!!!
router.get("/", async (req, res) => {
  try {
      console.log('*****1*****');
      const userId = "660db1e6ae85e5da6e1f99dc";
      console.log('*****2*****');
      const chats = await chatService.getAllChatsForInbox(userId);
      console.log('*****3*****');
      res.send(chats);
      console.log('*****4*****');
    } catch (err) {
        console.log('*****5*****');
        res
        .status(err.code || 500)
        .send({ msg: err.msg || "something went wrong" });
  }
});

module.exports = router;
