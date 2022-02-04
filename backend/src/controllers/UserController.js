const User = require('../models/User')

module.exports = {
    async createUser(req,res) {
        const {

            email,
            userName,
            password,
            avatar
        } = req.body

         try{
            const verifyEmail = await User.findOne({email})
            if(verifyEmail) return res.status(400).send({message: "cupinxa ja ta na tropa"})
            const createdUser = await User.create({
                email,
                userName,
                password,
                avatar
            })
            return res.status(200).send({
                message: "crai criado cupix",
                data : createdUser
            })
        }catch(err){
            console.log(err)
            return res.status(400).send(err)
        }
    },
    async listUser(req,res){
        try{
            const allUsers = await User.find()
            
            return res.status(200).send({
                message: "to i a tropa",
                data: allUsers
            })

        }catch(err){
            return res.status(400).send(err)
        }
    },

    async followUser(req,res){
        
        const {user_id} = req.params
        const {user} = req.headers


        try {

            const follower = await User.findById(user,{avatar : 0}).populate("followers")
            if(!follower) return res.status(400).send("deu ruim seguidor")
            const followed = await User.findById(user_id, {avatar : 0}).populate("followers")
            if(!followed) return res.status(400).send("deu ruim no seguido")
           
            let follow = false

            for(x = 0; x < followed.followers.length; x++){
                if(followed.followers[x].id == user) {follow = true}
            }
            console.log(follow);
            if(!follow){
            const seguido = await User.findByIdAndUpdate(user_id,{
                $addToSet: {"followers" : user}
            })
            } else{
                const seguido = await User.findByIdAndUpdate(user_id,{
                    $pull: {"followers" : user}
            })
        }
            
            

            return res.status(200).send({
                message: "cria segue cria",
    
            })
        } catch (error) {
            return res.status(400).send(error+ "oi?")
        }
    }
}