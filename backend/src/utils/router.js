const { Router } = require("express")
const { route } = require("express/lib/application")
const loginController = require("../controllers/loginController")
const partyController = require("../controllers/partyController")
//const postController = require("../controllers/postController")
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
//da like
router.put("/post/:post_id/like", profileController.likePost)
//follow
router.put("/users/:user_id",userController.followUser)
//ver perfil
router.get("/users/:user_id", profileController.getProfiles)
//criar feste
router.post("/party",partyController.createParty)
//listar festas
router.get("/party", partyController.listPartys)
//ir na festa
router.put("/party/:party_id", partyController.joinParty)
//pensando em ir na festa
router.put("/party/t/:party_id", partyController.tinkParty)
module.exports = router
