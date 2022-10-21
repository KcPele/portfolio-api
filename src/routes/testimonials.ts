
import express from "express"
import Testimonial, { ITestimonial } from "../models/testimonials"
import { createTestimonial, updateTestiminial, deleteTestimonial } from "../controllers/testimonials"
import { tokenMiddleware, upload } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const data = await Testimonial.find({}) as [ITestimonial?]
    res.status(200).json(data)
})

router.post("/", tokenMiddleware, upload.single("file"), createTestimonial)


router.put("/", tokenMiddleware, upload.single("file"), updateTestiminial)

router.delete("/", tokenMiddleware, deleteTestimonial)


export default router;