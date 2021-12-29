const { Router } = require("express")
const { route } = require("express/lib/application")
const loginController = require("../controllers/loginController")
const postController = require("../controllers/postController")
const profileController = require("../controllers/profileController")
const userController = require("../controllers/UserController")

const router = Router()


// rotas a serem criadas:
//criar usuario
router.post("/users",userController.createUser)
//listar usuraios
router.get("/users", userController.listUser)
//fazer login
router.post("/login", loginController.login )
//fazer logout
//ver o feed
//da like
router.put("/post/:post_id/like", profileController.likePost)
//postar foto
router.post("/post", postController.createPost)
//ver todos os posts
router.get("/post", postController.listPosts)
//deletar a foto
router.delete("/post/:post_id", postController.deletePosts)
//editar uma foto
router.put("/post/:post_id", postController.editPosts)
//follow
router.put("/users/:user_id",userController.followUser)
//ver perfil
router.get("/users/:user_id", profileController.getProfiles)


module.exports = router
