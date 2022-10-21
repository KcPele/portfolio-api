import multer from "multer";
import jwt from "jsonwebtoken";
const storage = multer.memoryStorage();
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