
import express from "express"
import Tag, { ITag } from "../models/tags"
import { createTag, deleteTag, updateTag } from "../controllers/tags"
import { tokenMiddleware } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const data = await Tag.find({}) as [ITag?]
    res.status(200).json(data)
})

router.post("/", tokenMiddleware, createTag)


router.put("/", tokenMiddleware, updateTag)

router.delete("/", tokenMiddleware, deleteTag)


export default router;