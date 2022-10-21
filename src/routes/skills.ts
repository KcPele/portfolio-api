
import express from "express"
import Skill, { ISkill } from "../models/skills"
import { createSkills, deleteSkills, updateSkills } from "../controllers/skills"
import { tokenMiddleware, upload } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const data = await Skill.find({}) as [ISkill?]
    res.status(200).json(data)
})

router.post("/", tokenMiddleware, upload.single("file"), createSkills)


router.put("/", tokenMiddleware, upload.single("file"), updateSkills)

router.delete("/", tokenMiddleware, deleteSkills)


export default router;