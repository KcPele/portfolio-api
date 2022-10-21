import multer from "multer"
import { Request, NextFunction, Response} from "express"
import jwt from "jsonwebtoken"
const storage = multer.memoryStorage()
export const upload = multer({ storage: storage })



export interface IRequest extends Request {
    userId: any
}

export const tokenMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1] as string
    try {
        const userId = jwt.verify(token, process.env.PRIVATE_KEY as string)as jwt.JwtPayload
        req.params["userId"] = userId._id
        next()
        
    } catch (error: any) {
        // console.log(error)
        res.status(500).json({"error": error.message })
        
    }
}