const express = require('express')

//definir objeto de ruteo

const router = express.Router()

//listar todos los bootcamps    
router.get('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "aqui van a salir todos los bootcamps"
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

router.put('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `aqui se va a actualizar el bootcamp con id ${req.params.id}`
        })
})

//Eliminar

router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `aqui se va a eliminar el bootcamp con id ${req.params.id}`
        })
})

//crear nuevo bootcamps
router.post('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "aqui se van a registrar los bootcamps"
        })
})

module.exports = router