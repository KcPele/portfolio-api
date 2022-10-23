import multer from "multer";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary";
import "dotenv/config";


cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
        folder: "portfolio"
    }
});
export const upload = multer({ storage: storage });
export const tokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const userId = jwt.verify(token, process.env.PRIVATE_KEY);
        req.userId = userId._id;
        next();
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};
//# sourceMappingURL=index.js.map