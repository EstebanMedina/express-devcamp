//1. crear el objeto express
const express = require('express')
//2. Citar las dependencias necesarias
const dotenv = require('dotenv')
const colors = require ('colors')
const listEndpoint = require ('express-list-endpoints')
//los componentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const CourseRoutes = require ('./routes/CourseRoutes')


//3. Establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
//console.log(process.env.PORT)

//crear el objeto application
//para el servidor de desarrollo
const app = express()

//rutas de express
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , CourseRoutes)


//endpoints de aplicacion
app.get('/' , (request , response)=>{
    response
    .status(200)
    .json({
        "success": true,
        "data" : "request exitosa"} )
} )


//imprimir la lista de endpoints
//validas del proyecto
console.log(listEndpoint(app))



//ejecutar el servidor de desarrollo
//parametros:
//puerto de escucha - listen
app.listen(process.env.PORT , ()=>{
    console.log(`servidor activo en puerto 5000`.bgBlue.white)
})