import express from "express"
import User from "../models/user"
const router = express.Router()




router.post("/login",  async (req: express.Request, res: express.Response) => {
    const user = await User.loginUser(req.body.email, req.body.password)
    res.status(200).json(user)
})
router.post("/register",  async (req: express.Request, res: express.Response) => {
    const user = await User.createNewUser(req.body.email, req.body.password)
    res.status(200).json(user)
})
export default router;