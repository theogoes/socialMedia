const User = require("../models/User")

module.exports = {
    async login(req,res){
        const {email, password} = req.body
        
        try {
            const emailExist = await User.findOne({
                email
            })
            if(emailExist){
                const login = await User.findOne({
                    password
                }).where({email})
                if(login){
                    return res.status(200).send({
                        message: "Bem vindo de volta rapa!",
                        data: login
                    })
                }else return res.status(400).send({message: "senha ewrrado manzinhoo"})
            }else{
                return res.status(400).send({message: "cupinxa ta na rota n!"})
            }
        } catch (err) {
            return res.status(400).send(err)
        }
    }
}