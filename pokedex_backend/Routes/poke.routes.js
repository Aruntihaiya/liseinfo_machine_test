


const router = require("express").Router()
// const {singleUpload}= require('../Helpers/multer')
const {Addpokemon ,GetAllpokemon,Updatepokemon,Deletepokemon} = require('../Controllers/pokeController')

router.post('/add/pokemon', Addpokemon);
router.get('/get/pokemonlist', GetAllpokemon);
router.post('/update/pokemon/:id',Updatepokemon)
router.post('/delete/pokemon/:id',Deletepokemon)
// router.post('/changesttus/user',ChangeStatus)




module.exports = router;
