const Party = require('../models/Party')
const User = require('../models/User')

module.exports = {
    async createParty(req,res){
        const{
            nome,
            local,
            valor,
        } = req.body
        const{gerente} = req.headers
        
        try {
            const createdParty = await Party.create({
                nome,
                local,
                valor,
                gerente
            })
            return res.status(200).send({
                message: "uhooo",
                data: createdParty
            })
        } catch (error) {
            console.log(error);
            return res.status(400).send(error)
        }
    },

    async listPartys(req,res){
        try {
            const allPartys = await Party.find().populate("gerente")
            
            return res.status(200).send({
                message: "to as festitas",
                data: allPartys
            })
        } catch (error) {
           return res.status(400).send(error) 
        }
    },

    async joinParty(req, res){
        const {user_id} = req.headers
        const {party_id} = req.params

        try {
            const user = await User.findById(user_id)
            if(!user) return res.status(200).send("deu ruim no user")
            const party = await Party.findById(party_id).populate("festeiros")
            if(!party) return res.status(200).send("deu ruim no party")      

            let inParty = false
            for(x = 0; x < party.festeiros.length; x++){
                if(party.festeiros[x].id == user_id) {inParty = true}
            }

            if(!inParty){
            const go = await Party.findByIdAndUpdate(party_id,{
                $addToSet: {"festeiros" : user_id}
            })}else{
                const go = await Party.findByIdAndUpdate(party_id,{
                    $pull: {"festeiros" : user_id}
                })
            }

            return res.status(200).send({
                message: "partiuu"
            })

        } catch (error) {
            return res.status(200).send(erro)
        }
    },

    async tinkParty(req, res){
        const {user_id} = req.headers
        const {party_id} = req.params

        try {
            const user = await User.findById(user_id)
            if(!user) return res.status(200).send("deu ruim no user")
            const party = await Party.findById(party_id).populate("festeiros")
            if(!party) return res.status(200).send("deu ruim no party")      

            let inParty = false
            for(x = 0; x < party.pretendente.length; x++){
                if(party.pretendente[x].id == user_id) {inParty = true}
            }

            if(!inParty){
            const go = await Party.findByIdAndUpdate(party_id,{
                $addToSet: {"pretendente" : user_id}
            })}else{
                const go = await Party.findByIdAndUpdate(party_id,{
                    $pull: {"pretendente" : user_id}
                })
            }

            return res.status(200).send({
                message: "partiuu"
            })

        } catch (error) {
            return res.status(200).send(erro)
        }
    }

}