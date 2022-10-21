import express from "express"
import { Types } from "mongoose";

import Work, { IWork } from "../models/works";


const createWork = async (req: express.Request, res: express.Response) => {
    const {title, description, projectLink, codeLink, tags }=req.body;
    const imgUrl = {

        contentType: req.file?.mimetype as string,
        buffer: req.file?.buffer as Types.Buffer
   }
    try{
        const jsonTags=JSON.parse(tags)
            const data = await Work.create({title, description, projectLink, codeLink, imgUrl, tags:jsonTags })
            res.status(200).json(data)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateWork = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {title, description, projectLink, codeLink, tags }=req.body;
    
    const update= {title, description, projectLink, codeLink } as unknown as IWork
    if(tags) {
        const jsonTags = JSON.parse(tags)
        update.tags = jsonTags
    }
    if(req.file){
        update.imgUrl = {
            contentType: req.file.mimetype,
            buffer: req.file.buffer
        }
    }
     try {
        let query = {_id: id}
        let data = await Work.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteWork = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let data = await Work.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createWork,
    updateWork,
    deleteWork
}