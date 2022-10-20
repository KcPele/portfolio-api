
import express from "express"
import Product, { IProduct } from "../models/product"
import multer from "multer"

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
import { createProduct, deleteProduct, updateProduct } from "../controllers/products"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const product = await Product.find({}) as [IProduct?]
    res.status(200).json(product)
})

router.post("/", upload.single("file"), createProduct)


router.put("/", upload.single("file"), updateProduct)

router.delete("/", deleteProduct)


export default router;