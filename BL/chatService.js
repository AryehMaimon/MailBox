

const chatController = require("../DL/controllers/chatController");
const userSer = require('../BL/userService')


// async function getAllChatsForInbox(userId) {
//     // if (!isValidObjectId(userId)) throw { code: 401, msg: "inValid _id" };
//     const chats = await chatController.read({members: userId });
//     // if (!campaigns.length) throw { code: 404, msg: "no campaigns for this user" };
//     let sender = getUser('660db1e6ae85e5da6e1f99da')
//     (chats.msg[chats.msg.length-1].from)
//     console.log('sender', sender);
    
//     let inbox = chats.map(c=>({
//       subject: c.subject,
//       senderId: c.msg[c.msg.length-1].from,
//       avatarId: c.msg[c.msg.length-1].from,
//       lastDate: c.lastDate
//     }))
    
//     console.log('inbox:', inbox); 
//     return inbox;
//   }
  
//   module.exports = {
//     getAllChatsForInbox
// }
