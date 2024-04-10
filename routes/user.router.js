const express = require("express");
const router = express.Router();
const userService = require("../BL/userService");

// ***get all chats of user


router.get("/inbox/:id", async (req, res) => {
  try {
      console.log('*****1*****');
      const userId = req.params.id
      console.log('*****2*****', userId);
      const userChats = await userService.getUsersChats(userId);
      console.log('*****3*****');
      res.send(userChats);
      console.log('*****4*****',userChats);
    } catch (err) {
        console.log(err);
        console.log('*****5*****');
        res
        .status(err.code || 500)
        .send({ msg: err.msg || "something went wrong" });
  }
});

module.exports = router;
