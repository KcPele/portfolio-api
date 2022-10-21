
import express from "express"
import About, { IAbout } from "../models/about"
import { createAbout, deleteAbout, updateAbout } from "../controllers/about"
import { tokenMiddleware, upload } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const about = await About.find({}) as [IAbout?]
    res.status(200).json(about)
})

router.post("/", tokenMiddleware, upload.single("file"), createAbout)


router.put("/", tokenMiddleware, upload.single("file"), updateAbout)

router.delete("/", tokenMiddleware, deleteAbout)


export default router;