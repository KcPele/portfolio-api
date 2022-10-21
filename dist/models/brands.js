import { Schema, model } from 'mongoose';
const brandSchema = new Schema({
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    name: { type: String, required: true },
});
export default model("Brand", brandSchema);
//# sourceMappingURL=brands.js.map