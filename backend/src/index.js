const express = require('express')
const router = require('./utils/router')
const mogoose = require("mongoose")
const cors = require(`cors`)
require('dotenv').config()

const uri = process.env.MONGO_URI

const app = express()

mogoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });


app.use(express.json())
app.use(cors())
app.use(router)




app.listen(process.env.PORT || 3000, () => console.log("server runing"));