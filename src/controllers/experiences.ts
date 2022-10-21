import express from "express"

import Experience, { IExperience } from "../models/experiences";


const createExperience = async (req: express.Request, res: express.Response) => {
    const { year, works } = req.body
    try{
            const data = await Experience.create({year, works })
            res.status(200).json(data)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateExperience = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {year, works }=req.body;
    const update= {year, works} as unknown as IExperience
     try {
        let query = {_id: id}
        let data = await Experience.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteExperience = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let data = await Experience.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createExperience,
    updateExperience,
    deleteExperience
}