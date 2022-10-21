import express from "express"
import { Types } from "mongoose";
import User from "../models/user";
import Testimonial, { ITestimonial } from "../models/testimonials";


const createTestimonial = async (req: express.Request, res: express.Response) => {
    const {name, company, feedback} = req.body
    const imgUrl = {

         contentType: req.file?.mimetype as string,
         buffer: req.file?.buffer as Types.Buffer
    }
   
    try{

            const data = await Testimonial.create({name, imgUrl, company, feedback })
            res.status(200).json(data)
    } catch(err: any) {
        res.status(500).json({"error": err.message as Error})
    }
    
    
}

const updateTestiminial = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    const {name, company, feedback}=req.body;
    const update= {name, company, feedback} as unknown as ITestimonial
    
if(req.file){
    update.imgUrl = {
        contentType: req.file.mimetype,
        buffer: req.file.buffer
    }
}
     try {
        let query = {_id: id}
        let data = await Testimonial.findOneAndUpdate(query,  update, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"}) 
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteTestimonial = async (req: express.Request, res: express.Response) => {
    const {id} = req.query
     try {
        let query = {_id: id}
        let data = await Testimonial.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(data)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createTestimonial,
    updateTestiminial,
    deleteTestimonial
}