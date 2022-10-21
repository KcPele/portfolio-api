import express from "express";
import Testimonial from "../models/testimonials";
import { createTestimonial, updateTestiminial, deleteTestimonial } from "../controllers/testimonials";
import { tokenMiddleware, upload } from "../middleware";
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