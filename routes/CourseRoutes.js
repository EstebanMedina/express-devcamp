const express = require('express')

//definir objeto de ruteo
const router = express.Router()

//listar todos los bootcamps
router.get('/' , (req,res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "aqui  van a salir todos los bootcamps"
        })
})

//listar bootcamp por id
router.get('/:id' , (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `aqui  van a salir el bootcamp cuyo id es ${req.params.id}`
        })
})

//actualizar bootcamps
router.put('/:id' , (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `aqui  va a actualizarse el bootcamp ${req.params.id}`
        })
})

//eliminar bootcamps
router.delete('/:id' , (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `aqui  va a eliminarse el bootcamp ${req.params.id}`
        })
})

//crear nuevo bootcamp
router.post('/' , (req,res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "aqui vamos a registrar bootcamp"
            
        })
})

module.exports = router