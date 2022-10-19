const express = require('express')

//definir objeto de ruteo

const router = express.Router()

//listar todos los bootcamps    
router.get('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "aqui van a salir todos los cursos"
        })
})

//listar curso por id
router.get('/:id' , (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `aqui  van a salir el curso cuyo id es ${req.params.id}`
        })
})

//actualizar curso

router.put('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `aqui se va a actualizar el curso con id ${req.params.id}`
        })
})

//Eliminar

router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data" : `aqui se va a eliminar el curso con id ${req.params.id}`
        })
})

//crear nuevo curso
router.post('/', (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data" : "aqui se van a registrar los curso"
        })
})

module.exports = router