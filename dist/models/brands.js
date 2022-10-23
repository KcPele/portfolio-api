import { Schema, model } from 'mongoose';
const brandSchema = new Schema({
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
});
export default model("Brand", brandSchema);
//# sourceMappingURL=brands.js.map