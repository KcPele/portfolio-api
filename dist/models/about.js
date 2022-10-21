import { Schema, model } from 'mongoose';
const aboutSchema = new Schema({
    title: { type: String, required: true },
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    description: { type: String, required: true },
}, {
    timestamps: true
});
export default model("About", aboutSchema);
//# sourceMappingURL=about.js.map