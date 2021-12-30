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

        
        console.log(user_id);
        console.log(user);
        try {

            const seguido = await User.findByIdAndUpdate(user_id,{
                $addToSet: {"followers" : user}
            })
            

            return res.status(200).send({
                message: "cria segue cria",
                data: seguido
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}