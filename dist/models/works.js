import { Schema, model } from 'mongoose';
const workSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    projectLink: { type: String, required: true },
    codeLink: { type: String, required: true },
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});
export default model("Work", workSchema);
//# sourceMappingURL=works.js.map