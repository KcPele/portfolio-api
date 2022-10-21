import { Schema, model } from 'mongoose';
const profileSchema = new Schema({
    name: { type: String, required: true },
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
});
export default model("Profile", profileSchema);
//# sourceMappingURL=profile.js.map