import express from "express";
import Skill from "../models/skills";
import { createSkills, deleteSkills, updateSkills } from "../controllers/skills";
import { tokenMiddleware, upload } from "../middleware";
const router = express.Router();
router.get("/", async (req, res) => {
    const data = await Skill.find({});
    res.status(200).json(data);
});
router.post("/", tokenMiddleware, upload.single("file"), createSkills);
router.put("/", tokenMiddleware, upload.single("file"), updateSkills);
router.delete("/", tokenMiddleware, deleteSkills);
export default router;
//# sourceMappingURL=skills.js.map