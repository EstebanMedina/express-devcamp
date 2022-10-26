const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes } = require("sequelize")

//crear instancia de el modelo 
const UserModel = require('../models/user')
const User =  UserModel(sequelize, DataTypes)



//definir la funcion de conexiona la base
//de datos

const connectDB = async ()=>{
    try{
    //conectarse a la base de datos
    await sequelize.authenticate()
    console.log('My love are you connected to mysql'.bgBlue)
     // Create a new user
    const jane = await User.create({ 
        username: "Son Gohan", 
        email: "goathan@gmail.com", 
        password: "" 
    });
    console.log("Jane's auto-generated ID:", jane.id);
    }catch (error){
        console.log(error)
    }
}

connectDB()