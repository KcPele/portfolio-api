import { Schema, model } from 'mongoose';
const skillSchema = new Schema({
    name: { type: String, required: true },
    iconUrl: {
        contentType: String,
        buffer: Buffer
    },
    bgColor: { type: String, required: true },
});
export default model("Skill", skillSchema);
//# sourceMappingURL=skills.js.map