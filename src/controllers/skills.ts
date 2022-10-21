import express from "express"
import { Types } from "mongoose";
import Skill, { ISkill } from "../models/skills";


const createSkills = async (req: express.Request, res: express.Response) => {
    const {name, bgColor} = req.body
    const iconUrl = {

         contentType: req.file?.mimetype as string,
         buffer: req.file?.buffer as Types.Buffer
    }
   
    try{

            const data = await Skill.create({name, iconUrl, bgColor })
            res.status(200).json(data)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateSkills = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {name, bgColor}=req.body;
    const update= {name, bgColor} as unknown as ISkill
    
if(req.file){
    update.iconUrl = {
        contentType: req.file.mimetype,
        buffer: req.file.buffer
    }
}
     try {
        let query = {_id: id}
        let data = await Skill.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteSkills = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let data = await Skill.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createSkills,
    updateSkills,
    deleteSkills
}