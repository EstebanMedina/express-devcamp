const express = require('express')
const  { 
    getALLUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
 } = require('../controllers/UserController')
//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametros
router.route('/')
            .get(getALLUsers)
            .post(createUser)

//crear rutas con parametros
router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)


module.exports = router