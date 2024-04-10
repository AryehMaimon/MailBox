const userController = require("../DL/controllers/userController");

async function getUser(userId) {
  console.log("$$$$1$$$$", userId);
  // if (!isValidObjectId(userId)) throw { code: 401, msg: "inValid _id" };
  const user = await userController.readOne({ _id: userId });
  // if (!campaigns.length) throw { code: 404, msg: "no campaigns for this user" };

  return user;
}
async function getUsersChats(userId) {
  console.log("$$$$1$$$$", userId);

  let { chats } = await userController.readOne(
    { _id: userId },
    { chats: true, users: true }
  );

  
   return chats
}

module.exports = {
  getUser,
  getUsersChats,
};

// let fakeChats = [
//     {
//         "isRead": false,
//         "labels": [],
//         "chat": {
//             "_id": "66164b0a5ae49749f8beb085",
//             "subject": "Hello, how are you?",
//             "msg": [
//                 {
//                     "from": "66164b0a5ae49749f8beb07b",
//                     "date": "2024-03-21T10:00:00.000Z",
//                     "content": "Greeting and you??",
//                     "_id": "66164b0a5ae49749f8beb086"
//                 },
//                 {
//                     "from": "66164b095ae49749f8beb079",
//                     "date": "2024-03-21T10:08:00.000Z",
//                     "content": "Fine, and you?",
//                     "_id": "66164b0a5ae49749f8beb087"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb083",
//                     "date": "2024-03-21T10:24:00.000Z",
//                     "content": "Walla Sababa !!",
//                     "_id": "66164b0a5ae49749f8beb088"
//                 }
//             ],
//             "members": [
//                 {
//                     "_id": "66164b095ae49749f8beb079",
//                     "fullName": "Moshe Cohen",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Yellow"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07b",
//                     "fullName": "Haim Levi",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07f",
//                     "fullName": "Sivan Tov",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb083",
//                     "fullName": "Smadar Omer",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned"
//                 }
//             ],
//             "lastDate": "2024-03-21T10:24:00.000Z",
//             "__v": 0
//         },
//         "isSent": true,
//         "isRecieved": true,
//         "isFavorite": false,
//         "isDeleted": false,
//         "_id": "66164b0a5ae49749f8beb08a"
//     },
//     {
//         "isRead": false,
//         "labels": [],
//         "chat": {
//             "_id": "66164b0a5ae49749f8beb08f",
//             "subject": "Report Request",
//             "msg": [
//                 {
//                     "from": "66164b0a5ae49749f8beb07d",
//                     "date": "2024-03-20T09:30:00.000Z",
//                     "content": "Could you please send me the report?",
//                     "_id": "66164b0a5ae49749f8beb090"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb07b",
//                     "date": "2024-03-20T10:45:00.000Z",
//                     "content": "whyyyyy?!?!",
//                     "_id": "66164b0a5ae49749f8beb091"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb07d",
//                     "date": "2024-03-20T10:57:00.000Z",
//                     "content": "why whyyyyyyy?!?!",
//                     "_id": "66164b0a5ae49749f8beb092"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb083",
//                     "date": "2024-03-21T07:30:00.000Z",
//                     "content": "Ok, i'm fired!",
//                     "_id": "66164b0a5ae49749f8beb093"
//                 }
//             ],
//             "members": [
//                 {
//                     "_id": "66164b0a5ae49749f8beb07b",
//                     "fullName": "Haim Levi",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07d",
//                     "fullName": "Mor Noam",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelGreen&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07f",
//                     "fullName": "Sivan Tov",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb081",
//                     "fullName": "Roni Malkan",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb083",
//                     "fullName": "Smadar Omer",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned"
//                 }
//             ],
//             "lastDate": "2024-03-21T07:30:00.000Z",
//             "__v": 0
//         },
//         "isRecieved": true,
//         "isFavorite": false,
//         "isDeleted": false,
//         "_id": "66164b0b5ae49749f8beb09a"
//     },
//     {
//         "isRead": false,
//         "labels": [],
//         "chat": {
//             "_id": "66164b0b5ae49749f8beb09e",
//             "subject": "Meeting Reminder",
//             "msg": [
//                 {
//                     "from": "66164b0a5ae49749f8beb07b",
//                     "date": "2024-04-08T11:00:00.000Z",
//                     "content": "Just a reminder about our meeting tomorrow.",
//                     "_id": "66164b0b5ae49749f8beb09f"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb07d",
//                     "date": "2024-04-08T11:05:00.000Z",
//                     "content": "Thanks for the heads-up. Looking forward to it!",
//                     "_id": "66164b0b5ae49749f8beb0a0"
//                 }
//             ],
//             "members": [
//                 {
//                     "_id": "66164b0a5ae49749f8beb07b",
//                     "fullName": "Haim Levi",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07d",
//                     "fullName": "Mor Noam",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelGreen&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
//                 }
//             ],
//             "lastDate": "2024-04-08T11:05:00.000Z",
//             "__v": 0
//         },
//         "isSent": true,
//         "isRecieved": false,
//         "isFavorite": false,
//         "isDeleted": false,
//         "_id": "66164b0b5ae49749f8beb0a6"
//     },
//     {
//         "isRead": false,
//         "labels": [],
//         "chat": {
//             "_id": "66164b0b5ae49749f8beb0bb",
//             "subject": "Team Building Event",
//             "msg": [
//                 {
//                     "from": "66164b0a5ae49749f8beb07b",
//                     "date": "2024-04-08T14:00:00.000Z",
//                     "content": "Let's organize a team-building event next month.",
//                     "_id": "66164b0b5ae49749f8beb0bc"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb081",
//                     "date": "2024-04-08T14:15:00.000Z",
//                     "content": "That sounds like a fantastic idea! Any suggestions?",
//                     "_id": "66164b0b5ae49749f8beb0bd"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb083",
//                     "date": "2024-04-08T14:30:00.000Z",
//                     "content": "I'll check some options and get back to you.",
//                     "_id": "66164b0b5ae49749f8beb0be"
//                 }
//             ],
//             "members": [
//                 {
//                     "_id": "66164b0a5ae49749f8beb07b",
//                     "fullName": "Haim Levi",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb081",
//                     "fullName": "Roni Malkan",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb083",
//                     "fullName": "Smadar Omer",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned"
//                 }
//             ],
//             "lastDate": "2024-04-08T14:30:00.000Z",
//             "__v": 0
//         },
//         "isSent": true,
//         "isRecieved": false,
//         "isFavorite": false,
//         "isDeleted": false,
//         "_id": "66164b0b5ae49749f8beb0c2"
//     },
//     {
//         "isRead": false,
//         "labels": [],
//         "chat": {
//             "_id": "66164b0c5ae49749f8beb0c6",
//             "subject": "Budget Discussion",
//             "msg": [
//                 {
//                     "from": "66164b095ae49749f8beb079",
//                     "date": "2024-04-08T15:00:00.000Z",
//                     "content": "We need to discuss the budget for the upcoming project.",
//                     "_id": "66164b0c5ae49749f8beb0c7"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb07b",
//                     "date": "2024-04-08T15:15:00.000Z",
//                     "content": "Agreed. Let's schedule a meeting to review.",
//                     "_id": "66164b0c5ae49749f8beb0c8"
//                 },
//                 {
//                     "from": "66164b0a5ae49749f8beb07f",
//                     "date": "2024-04-08T15:30:00.000Z",
//                     "content": "I'll prepare the necessary documents for the meeting.",
//                     "_id": "66164b0c5ae49749f8beb0c9"
//                 }
//             ],
//             "members": [
//                 {
//                     "_id": "66164b095ae49749f8beb079",
//                     "fullName": "Moshe Cohen",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Yellow"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07b",
//                     "fullName": "Haim Levi",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"
//                 },
//                 {
//                     "_id": "66164b0a5ae49749f8beb07f",
//                     "fullName": "Sivan Tov",
//                     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
//                 }
//             ],
//             "lastDate": "2024-04-08T15:30:00.000Z",
//             "__v": 0
//         },
//         "isRecieved": true,
//         "isFavorite": false,
//         "isDeleted": false,
//         "_id": "66164b0c5ae49749f8beb0cf"
//     }
// ]

// console.log(fakeChats[0].chat.members.find(m=> m._id == fakeChats[0].chat.msg[fakeChats[0].chat.msg.length-1].from).fullName);
