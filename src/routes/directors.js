import mongoose from 'mongoose'
import express from 'express';
import DirectorModel from '../models/director'
const router= express();
//GET /
router.get('/',async (req,res)=>{
    const directors=await DirectorModel.find().exec();
    return res.status(200).json({data:directors});
})
//GET /:ID
router.get('/:id',async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            statusCode:400,
            message:"Id is not valid"
        });
    }
         
    const director=await DirectorModel.findById(id).exec();
    if(!director){
        return res.status(404).json();    
    }
    return res.status(200).json(director);
})

//POST/
router.post('/',async (req,res)=>{
    const {name,email}=req.body
    //TODO: add validations

    //Generating a new director director instance
    const newdirector= new DirectorModel({name,email})
    await newdirector.save()
    return res.status(201).json();
})
//PATTCH /:id
router.patch('/:id',async (req,res)=>{
    const {id}=req.params
    const body=req.body;
    //TODO: add validations
    console.log(body)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            statusCode:400,
            message:"Id is not valid"
        });
    }
    const director=await DirectorModel.findByIdAndUpdate(id,{
        $set:{...body}
    },{
        new :true
    }).exec()
    if(!director) return res.status(404).json();
    return res.status(200).json(director);
})

//DELETE/
router.delete('/:id',async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            statusCode:400,
            message:"Id is not valid"
        });
    }
    await DirectorModel.findByIdAndDelete(id).exec()
    return res.status(200).json();
})


export default router;