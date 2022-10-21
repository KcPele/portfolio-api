import { Schema, model } from 'mongoose';
const experienceSchema = new Schema({
    year: { type: String, required: true },
    works: [{ type: Schema.Types.ObjectId, ref: "WorkExperience" }],
});
export default model("Experience", experienceSchema);
//# sourceMappingURL=experiences.js.map