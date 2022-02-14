const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    local:{
        type: String,
        required : true
    },
    valor:{
        type: Number,
        required: true
    },
    gerente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fotoPerfil:{
        type: String,
    },
    fotoBanner:{
        type: String,
    },
    adm:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    festeiros:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    pretendente:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    data:{
        type: Date
    }
})

module.exports = mongoose.model("Party",Schema)