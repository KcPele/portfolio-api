
import express from "express"
import Brand, { IBrand } from "../models/brands"
import { createBrand, deleteBrand, updateBrand } from "../controllers/brands"
import { tokenMiddleware, upload } from "../middleware"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const brand = await Brand.find({}) as [IBrand?]
    res.status(200).json(brand)
})

router.post("/", tokenMiddleware, upload.single("file"), createBrand)


router.put("/", tokenMiddleware, upload.single("file"), updateBrand)

router.delete("/", tokenMiddleware, deleteBrand)


export default router;