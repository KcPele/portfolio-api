import multer from "multer"
import { Request, NextFunction, Response} from "express"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken"
// const storage = multer.memoryStorage()
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
        // folder: "portfolio"
    }
});
export const upload = multer({ storage: storage })



export interface IRequest extends Request {
    userId: any
}

export const tokenMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1] as string
    try {
        const userId = jwt.verify(token, process.env.PRIVATE_KEY as string)as jwt.JwtPayload
        // req.params["userId"] = userId._id
        req.userId = userId._id
        next()
        
    } catch (error: any) {
        // console.log(error)
        res.status(500).json({"error": error.message })
        
    }
}