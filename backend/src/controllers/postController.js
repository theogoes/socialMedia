const post = require("./Post")


module.exports ={
    async createPost(req,res){
        const {
            type,
            picture,
            description
        } = req.body
        
        const {user} = req.headers

        try {
            const newPost = await post.create({
                type,
                picture,
                description,
                user
            })
            return res.status(200).send({
                message: "post criado p tropa",
                data: newPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }

    },

    async listPosts(req,res){
        try{
            const allPost = await post.find()
            .populate('user')

            return res.status(200).send({
                message: "to i a tropa",
                data: allPost
            })

        }catch(err){
            return res.status(400).send(err)
        }
    },
    
    async deletePosts(req,res){
        const {post_id} = req.params
        const {user_id} = req.headers

        try {
            const postToDelete = await post.findById(post_id)
            .populate("user")
            if(!postToDelete) return res.status(400).send({message : "post nem existe cupinxa paraa"})
            if(user_id != postToDelete.user.id) return res.status(400).send({message: "Este post não é seu cria"})
            
            const deletedPost = await post.findByIdAndDelete(post_id)

            return res.status(200).send({message : "ta na mao campeão!", data : deletedPost})
        } catch (error) {
            return res.status(400).send({message : "deu não", data : error})
        }
    },

    async editPosts(req,res){
        const {user_id} = req.headers
        const {post_id} = req.params
        const {post_description} = req.body

        try {
            const toEditPost = await post.findById(post_id)
            .populate("user")
            if(!toEditPost) return res.status(400).send({message:"post n existe cupinxaaa"})
            if(toEditPost.user.id != user_id) return res.status(400).send({message : "ai não cupinxaaa"})

            const editPost = await post.findByIdAndUpdate(post_id, {
                description : post_description
            })
            return res.status(200).send({
                message :  "trocado ai p tu manzinho",
                data : editPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }
        

    }
}