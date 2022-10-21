import express from "express"
import { Types } from "mongoose";
import Brand, { IBrand } from "../models/brands";


const createBrand = async (req: express.Request, res: express.Response) => {
    const {name} = req.body
    const imgUrl = {

         contentType: req.file?.mimetype as string,
         buffer: req.file?.buffer as Types.Buffer
    }
   
    try{
           
            const brand = await Brand.create({name, imgUrl })
            res.status(200).json(brand)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateBrand = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {name}=req.body;
    const update= {name} as unknown as IBrand
    
if(req.file){
    update.imgUrl = {
        contentType: req.file.mimetype,
        buffer: req.file.buffer
    }
}
     try {
        let query = {_id: id}
        let brand = await Brand.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(brand)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteBrand = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let brand = await Brand.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(brand)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createBrand,
    updateBrand,
    deleteBrand
}