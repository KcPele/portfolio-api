import express from "express"
import Service, { IService } from "../models/service"
import { Types } from "mongoose";


const createService = async (req: express.Request, res: express.Response) => {
    const {name, price, description} = req.body
    const contentType = req.file?.mimetype as string
    const buffer = req.file?.buffer as Types.Buffer
    const userId = req.userId
    const service = await Service.createNewService(name, price, contentType, buffer, userId, description)
    res.status(200).json(service)
}

const updateService = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
    const {name, price, description} = req.body
    const update= {name, price, description} as unknown as IService

        
if(req.file){
    update.imgUrl = {
        contentType: req.file.mimetype,
        buffer: req.file.buffer
    }
}
    
     try {
       
        let query = {_id: id, owner: req.userId}
        let service = await Service.findOneAndUpdate(query, update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"})
        })
        res.status(200).json(service)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteService = async (req: express.Request, res: express.Response) => {
    const id = req.query.id
 
     try {
      
        let query = {_id: id, owner: req.userId}
        let service = await Service.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(service)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createService,
    updateService,
    deleteService
}