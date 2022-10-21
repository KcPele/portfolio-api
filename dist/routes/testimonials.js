import express from "express";
import Testimonial from "../models/testimonials.js";
import { createTestimonial, updateTestiminial, deleteTestimonial } from "../controllers/testimonials.js";
import { tokenMiddleware, upload } from "../middleware/index.js";
const router = express.Router();
router.get("/", async (req, res) => {
    const data = await Testimonial.find({});
    res.status(200).json(data);
});
router.post("/", tokenMiddleware, upload.single("file"), createTestimonial);
router.put("/", tokenMiddleware, upload.single("file"), updateTestiminial);
router.delete("/", tokenMiddleware, deleteTestimonial);
export default router;
//# sourceMappingURL=testimonials.js.map