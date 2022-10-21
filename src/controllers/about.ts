import express from "express"
import { Types } from "mongoose";
import User from "../models/user";
import About, { IAbout } from "../models/about";


const createAbout = async (req: express.Request, res: express.Response) => {
    const {title, description} = req.body
    const imgUrl = {

         contentType: req.file?.mimetype as string,
         buffer: req.file?.buffer as Types.Buffer
    }
   
    try{

       
           
            const data = await About.create({title, description, imgUrl })
            res.status(200).json(data)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateAbout = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {title, description}=req.body;
    const update= {title, description} as unknown as IAbout
    
if(req.file){
    update.imgUrl = {
        contentType: req.file.mimetype,
        buffer: req.file.buffer
    }
}
     try {
        let query = {_id: id}
        let data = await About.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteAbout = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let data = await About.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createAbout,
    updateAbout,
    deleteAbout
}