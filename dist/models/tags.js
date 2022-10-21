import { Schema, model } from 'mongoose';
const tagSchema = new Schema({
    tag: { type: String, required: true },
});
export default model("Tag", tagSchema);
//# sourceMappingURL=tags.js.map