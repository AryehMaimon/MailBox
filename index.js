const express = require('express');
const cors = require('cors');
const PORT = 2500
require("dotenv").config()
 const db = require('./DL/DB')


const app = express();
 db.connect();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`****server is listening on ${PORT}****`))
