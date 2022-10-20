import express from "express"
import Product from "../models/product"
import jwt from "jsonwebtoken";
import { Types } from "mongoose";


const createProduct = async (req: express.Request, res: express.Response) => {
    const name = req.body.name as string
    const price = req.body.price as Number
    const contentType = req.file?.mimetype as string
    const buffer = req.file?.buffer as Types.Buffer
    const desc = req.body.desc as string
    const token = req.headers.authorization?.split(" ")[1] as string
    const product = await Product.createNewProduct(name, price, contentType, buffer, token, desc)
    res.status(200).json(product)
}

const updateProduct = async (req: express.Request, res: express.Response) => {
    const productId = req.query.productId
    const name = req.body?.name as string
    const price = req.body?.price as Number
    const img = {
        contentType: req?.file?.mimetype as string,
        buffer: req.file?.buffer as Types.Buffer

    }
    const desc = req.body?.desc as string
    const token = req.headers.authorization?.split(" ")[1] as string
     try {
        const userId = jwt.verify(token, process.env.PRIVATE_KEY as string)as jwt.JwtPayload
        let query = {_id: productId, owner: userId._id}
        let product = await Product.updateOne(query,  {$set: {name, price, desc, img}}, {new: true}).catch(err =>{
            res.status(500).json({"error": "Not updated"})
        })
        res.status(200).json(product)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
}

const deleteProduct = async (req: express.Request, res: express.Response) => {
    const productId = req.query.productId
    const token = req.headers.authorization?.split(" ")[1] as string
     try {
        const userId = jwt.verify(token, process.env.PRIVATE_KEY as string)as jwt.JwtPayload
        let query = {_id: productId, owner: userId._id}
        let product = await Product.deleteOne(query).catch(err =>{
            res.status(500).json({"error": "Not deleted"})
        })
        res.status(200).json(product)
     } catch (error: any) {
        res.status(500).json({"error": error.message as string})
        
     }
  
}

export {
    createProduct,
    updateProduct,
    deleteProduct
}