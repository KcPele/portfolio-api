import express from "express";
import Service from "../models/service";
import { tokenMiddleware, upload } from "../middleware";
import { createService, deleteService, updateService } from "../controllers/services";
const router = express.Router();
router.get("/", async (req, res) => {
    const service = await Service.find({});
    res.status(200).json(service);
});
router.post("/", tokenMiddleware, upload.single("file"), createService);
router.put("/", tokenMiddleware, upload.single("file"), updateService);
router.delete("/", tokenMiddleware, deleteService);
export default router;
//# sourceMappingURL=services.js.map