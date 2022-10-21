import multer from "multer";
import { Request, NextFunction, Response } from "express";
export declare const upload: multer.Multer;
export interface IRequest extends Request {
    userId: any;
}
export declare const tokenMiddleware: (req: Request, res: Response, next: NextFunction) => void;
