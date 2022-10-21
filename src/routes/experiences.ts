
import express from "express"
import Experience from "../models/experiences"
import { createExperience, deleteExperience, updateExperience } from "../controllers/experiences"
import { tokenMiddleware } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const data = await Experience.find({}).populate("works")
    res.status(200).json(data)
})

router.post("/", tokenMiddleware, createExperience)


router.put("/", tokenMiddleware, updateExperience)

router.delete("/", tokenMiddleware, deleteExperience)


export default router;