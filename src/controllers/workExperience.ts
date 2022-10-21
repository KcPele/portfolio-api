import express from "express"

import WorkExperience, { IWorkExperience } from "../models/workExperience";


const createWorkExperience = async (req: express.Request, res: express.Response) => {
    const { name, company, description } = req.body
   
    try{
            const data = await WorkExperience.create({name, company, description})
            res.status(200).json(data)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateWorkExperience = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {name, company, description }=req.body;
    const update= {name, company, description} as unknown as IWorkExperience
     try {
        let query = {_id: id}
        let data = await WorkExperience.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteWorkExperience = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let data = await WorkExperience.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createWorkExperience,
    updateWorkExperience,
    deleteWorkExperience
}