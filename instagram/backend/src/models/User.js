const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required : true
    },
    userName:{
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

module.exports = mongoose.model("User",Schema)