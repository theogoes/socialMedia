const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    picture:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true  
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    }]
})
module.exports = mongoose.model("Post",Schema)