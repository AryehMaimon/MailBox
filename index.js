const express = require('express');
const cors = require('cors');
const PORT = 2500
const chatRouter = require ('./routes/chat.router')
const userRouter = require ('./routes/user.router')
require("dotenv").config()
 const db = require('./DL/DB')


const app = express();
 db.connect();

app.use(cors());
app.use(express.json());

app.use('/chat',chatRouter)
app.use('/user',userRouter)

app.listen(PORT, () => console.log(`****server is listening on ${PORT}****`))
