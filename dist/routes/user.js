import express from "express";
import User from "../models/user.js";
const router = express.Router();
router.post("/login", async (req, res) => {
    const user = await User.loginUser(req.body.email, req.body.password);
    res.status(200).json(user);
});
router.post("/register", async (req, res) => {
    const user = await User.createNewUser(req.body.email, req.body.password);
    res.status(200).json(user);
});
export default router;
//# sourceMappingURL=user.js.map