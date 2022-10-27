//Dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//datatypes de Sequelize
const {DataTypes} = require('sequelize')
//el modelo
const UserModel = require('../models/user')


//crear la entidad:
const User = UserModel(sequelize, DataTypes)

//listar todos los users    
exports.getALLUsers =  async (req, res)=>{
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data" : users
        })
}

//listar users por id
exports.getSingleUser = async (req,res)=>{
    //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}
//actualizar user

exports.updateUser = async(req, res)=>{
    //console.log(req.params.id)
    await User.update(req.body,{
        where:{
            id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id);
    
    res
        .status(200)
        .json({
            "success": true,
            "data" : singleUser
        })
}


//Eliminar
exports.deleteUser = async (req, res)=>{
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
            id: req.params.id
        }
    });

    res
        .status(200)
        .json({
            "success": true,
            "data" : singleUser
        })
}

//crear nuevo user
exports.createUser = async (req, res)=>{
    res
        const newUser = await User.create(req.body)
        res
        .status(200)
        .json({
            "success": true,
            "data" : newUser
        })
}