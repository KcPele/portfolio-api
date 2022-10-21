
import express from "express"
import Work, { IWork } from "../models/works"
import { createWork, deleteWork, updateWork } from "../controllers/works"
import { tokenMiddleware, upload } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const data = await Work.find({}).populate("tags")
    res.status(200).json(data)
})

router.post("/", tokenMiddleware, upload.single("file"), createWork)


router.put("/", tokenMiddleware, upload.single("file"), updateWork)

router.delete("/", tokenMiddleware, deleteWork)


export default router;