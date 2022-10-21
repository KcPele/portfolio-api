import express from "express";
import Tag from "../models/tags";
import { createTag, deleteTag, updateTag } from "../controllers/tags";
import { tokenMiddleware } from "../middleware";
const router = express.Router();
router.get("/", async (req, res) => {
    const data = await Tag.find({});
    res.status(200).json(data);
});
router.post("/", tokenMiddleware, createTag);
router.put("/", tokenMiddleware, updateTag);
router.delete("/", tokenMiddleware, deleteTag);
export default router;
//# sourceMappingURL=tags.js.map