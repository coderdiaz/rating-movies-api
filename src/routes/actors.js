import express from 'express'
import Actor from '../models/actor'
import mongoose from 'mongoose'

const router = express.Router()

// GET 
router.get('/', async (req, res) =>{
    const actor = await Actor.find().exec()

    return res 
    .status(200)
    .json({data: actor})
})

//GET/:id
router.get('/:id', async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            message: 'The format id is not valid'
        })
    }
    const actor = await Actor.findById(id).exec()

    if(!actor){
        res.status(404).json()
    }

    return res
        .status(201)
        .json(actor)
})

//POST 
router.post('/', async (req, res) => {
    const { name } = req.body
    //TODO: add validations

    //Genera un nuevo usuario
    const newActor = new Actor({name})
    await newActor.save()

    return res
        .status(201)
        .json()
})

//PATCH
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const body = req.body
    //TODO: add validations
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            status: 404,
            message: 'Id is not valid'
        })
    }
    const actor = await Actor.findByIdAndUpdate(id, {
        $set: {...body}
    }, {new:true}).exec()

    if(!actor){
        return res.status(404).json()
    }

    return res
        .status(200)
        .json(actor)
})

//DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            statusCode: 400,
            massage: 'Id is not valid'
        })
    }

    await Actor.findOneAndDelete(id).exec()
    return res
    .status(200)
    .json()
})

export default router