
import express from "express"
import Service, { IService } from "../models/service"
import {tokenMiddleware, upload} from "../middleware"
import { createService, deleteService, updateService } from "../controllers/services"

const router = express.Router()

router.get("/",  async (req: express.Request, res: express.Response) => {
    const service = await Service.find({}) as [IService?]
    res.status(200).json(service)
})

router.post("/", upload.single("file"), createService)


router.put("/", tokenMiddleware, upload.single("file"), updateService)

router.delete("/", tokenMiddleware, deleteService)


export default router;