import express from 'express'
import User from '../models/user'
import mongoose from 'mongoose'

const router = express.Router()

//GET 
router.get('/', async (req, res) => {
    const users = await User.find().exec()

    return res
    .status(200)
    .json({ data: users })
})

//GET /:id
router.get('/:id', async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            massage: 'The format id is not valid'
        })
    }
    const user = await User.findById(id).exec()

    if(!user) {
        res.status(400).json()
    }

    return res
    .status(200)
    .json(user)
})

//POST
router.post('/', async (req, res) => {
    const {name, email} = req.body
    //TODO: add validations

    //Genera un nuevo usuario
    const newUser = new User({name, email})
    await newUser.save()

  return res.status(201).json()
})

// PATCH:/:id
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const body = req.body
    //TODO: add validations
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            statusCode: 400,
            massage: 'Id is not valid'
        })
    }

    const user = await User.findByIdAndUpdate(id, {
        $set: {...body}
    }, {new:true}).exec()

    if(!user){
        return res.status(404).json()
    }

    console.log(user)

    return res
        .status(200)
        .json(user)
})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            statusCode: 400,
            massage: 'Id is not valid'
        })
    }

    await User.findOneAndDelete(id).exec()
    return res
    .status(200)
    .json()
})

export default router