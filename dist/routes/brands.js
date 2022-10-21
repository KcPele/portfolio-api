import express from "express";
import Brand from "../models/brands";
import { createBrand, deleteBrand, updateBrand } from "../controllers/brands";
import { tokenMiddleware, upload } from "../middleware";
const router = express.Router();
router.get("/", async (req, res) => {
    const brand = await Brand.find({});
    res.status(200).json(brand);
});
router.post("/", tokenMiddleware, upload.single("file"), createBrand);
router.put("/", tokenMiddleware, upload.single("file"), updateBrand);
router.delete("/", tokenMiddleware, deleteBrand);
export default router;
//# sourceMappingURL=brands.js.map