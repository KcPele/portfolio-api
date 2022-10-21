
import express from "express"
import Profile, { IProfile } from "../models/profile"
import { createProfile, deleteProfile, updateProfile } from "../controllers/profile"
import { tokenMiddleware, upload } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const profile = await Profile.find({}) as [IProfile?]
    res.status(200).json(profile)
})

router.post("/", tokenMiddleware, upload.single("file"), createProfile)


router.put("/", tokenMiddleware, upload.single("file"), updateProfile)

router.delete("/", tokenMiddleware, deleteProfile)


export default router;