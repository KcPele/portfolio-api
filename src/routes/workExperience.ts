
import express from "express"
import WorkExperience, { IWorkExperience } from "../models/workExperience"
import { createWorkExperience, deleteWorkExperience, updateWorkExperience } from "../controllers/workExperience"
import { tokenMiddleware } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const data = await WorkExperience.find({}) as [IWorkExperience?]
    res.status(200).json(data)
})

router.post("/", tokenMiddleware, createWorkExperience)


router.put("/", tokenMiddleware, updateWorkExperience)

router.delete("/", tokenMiddleware, deleteWorkExperience)


export default router;