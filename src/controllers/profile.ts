import express from "express"
import { Types } from "mongoose";
import User from "../models/user";
import Profile, { IProfile } from "../models/profile";


const createProfile = async (req: express.Request, res: express.Response) => {
    const {name} = req.body
    const imgUrl = {

         contentType: req.file?.mimetype as string,
         buffer: req.file?.buffer as Types.Buffer
    }
   
    try{
            const owner = await User.findById(req.userId)
            const profile = await Profile.create({name, imgUrl, owner })
            res.status(200).json(profile)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateProfile = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {name}=req.body;
    const update= {name} as unknown as IProfile
    
if(req.file){
    update.imgUrl = {
        contentType: req.file.mimetype,
        buffer: req.file.buffer
    }
}
     try {
        let query = {_id: id, owner: req.userId}
        let profile = await Profile.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(profile)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteProfile = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id, owner: req.userId}
        let profile = await Profile.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(profile)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createProfile,
    updateProfile,
    deleteProfile
}