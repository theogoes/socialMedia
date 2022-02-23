const { vary } = require("express/lib/response")
//const post = require("../models/Post") <== legacy
const User = require("../models/User")
const Party = require("../models/Party")

module.exports = {
    async getProfiles(req,res){
        const {user_id} = req.params

        try {
            userInfo = await User.findById(user_id).populate("likes")
            if(!userInfo) return res.status(400).send({message : "cupinxa n existe -.-"})
            postUser = await post.find({
                user: user_id
            })
            return res.status(200).send({
                message : "To i o cupinxa",
                userInfo,
                postUser
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async likePost(req,res){
        const {user_id} = req.headers
        const {post_id} = req.params
        
    },
    async getParty(req,res){
        const {party_id} = req.params

        try {
            partyInfo = await Party.findById(party_id).populate("festeiros")
            if(!partyInfo) return res.status(400).send({message : "cupinxa n existe -.-"})

            return res.status(200).send({
                message : "To i o festere",
                partyInfo
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}