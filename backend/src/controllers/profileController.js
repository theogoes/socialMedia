const { vary } = require("express/lib/response")
const post = require("../models/Post")
const User = require("../models/User")

module.exports = {
    async getProfiles(req,res){
        const {user_id} = req.params

        try {
            userInfo = await User.findById(user_id)
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
        

        try {
            const likeUser = await User.findById(user_id).populate("likes")
            if(!likeUser) return res.status(400).send("deu ruim no user")
            const likePost = await post.findById(post_id).populate("likes")
            if(!likePost) return res.status(400).send("deu ruim no post")

            let liked = false
            for(x = 0; x < likePost.likes.length; x++){
                if(likePost.likes[x].id == user_id) {liked = true}
            }
            
            if(!liked){
                    const userLiked = await User.findByIdAndUpdate(user_id,{
                    $addToSet : {"likes" : post_id}
                })
                
                const postLiked = await post.findByIdAndUpdate(post_id,{
                    $addToSet : {"likes" : user_id}
                })
            }else{
                const userLiked = await User.findByIdAndUpdate(user_id,{
                    $pull : {"likes" : post_id}
                })
                
                const postLiked = await post.findByIdAndUpdate(post_id,{
                    $pull : {"likes" : user_id}
                })
            }

            return res.status(200).send({
                message : "cupixa so na curtição"
            })

        } catch (error) {
            return res.status(400).send(error)
        }
    }
}