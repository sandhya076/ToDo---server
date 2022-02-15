import model from "../models/model.js";
import Mongoose from "mongoose";


export const getList = async(req,res)=>{
    try{
        const data = await model.find();
        res.status(200).json(data);
    }catch(error){
        res.status(404).json(console.log({message:error.message}));
    }
};
export const createList = async(req,res) => {
    const data = req.body;
    const newList = new model(data)
      try{
          await newList.save();
        res.status(200).json(newList);
      }catch(error){
          res.status(404).json(console.log({message:error.message}));
      }
    };

    export const updateList = async(req,res)=>{
        const id  = req.params.id;
        const data = req.body;
       if(!Mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json(console.log("There is no List with that id"));
       }
       else{
           const updatedlist = await model.findByIdAndUpdate(id,{...data,id});
           return res.status(200).json(updatedlist)
       }
    };

    export const deleteList= async(req,res)=>{
        const id  = req.params.id;
        if(!Mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json(console.log("There is no List with that id"));
        }else{
            await model.findByIdAndRemove(id)
            return res.status(200).json(console.log("Ther List is deleted successfully"));
        }
    }

