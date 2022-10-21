import express from "express"

import Tag, { ITag } from "../models/tags";


const createTag = async (req: express.Request, res: express.Response) => {
    const { tag } = req.body
   
    try{
            const tags = await Tag.create({tag})
            res.status(200).json(tags)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateTag = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {tag }=req.body;
    const update= {tag} as unknown as ITag
     try {
        let query = {_id: id}
        let tags = await Tag.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(tags)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteTag = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let tags = await Tag.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(tags)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createTag,
    updateTag,
    deleteTag
}