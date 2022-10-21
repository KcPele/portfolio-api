import express from "express";
import WorkExperience from "../models/workExperience";
import { createWorkExperience, deleteWorkExperience, updateWorkExperience } from "../controllers/workExperience";
import { tokenMiddleware } from "../middleware";
const router = express.Router();
router.get("/", async (req, res) => {
    const data = await WorkExperience.find({});
    res.status(200).json(data);
});
router.post("/", tokenMiddleware, createWorkExperience);
router.put("/", tokenMiddleware, updateWorkExperience);
router.delete("/", tokenMiddleware, deleteWorkExperience);
export default router;
//# sourceMappingURL=workExperience.js.map