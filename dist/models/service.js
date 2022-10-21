import { Schema, model } from 'mongoose';
import * as dotenv from "dotenv";
import User from './user.js';
dotenv.config();
const serviceSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    slug: { type: String },
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true },
}, {
    timestamps: true
});
serviceSchema.static('createNewService', async function createNewService(name, price, contentType, buffer, userId, description) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return { "error": "Invalid token" };
        }
        else {
            const service = await Service.create({ name, price, img: { contentType, buffer }, owner: user, description });
            return service;
        }
    }
    catch (err) {
        return { "error": err.message };
    }
});
serviceSchema.pre("save", function (next) {
    this.slug = this.name.toLowerCase() + Date.now().toString();
    next();
});
const Service = model("Service", serviceSchema);
export default Service;
//# sourceMappingURL=service.js.map