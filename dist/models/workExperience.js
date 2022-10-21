import { Schema, model } from 'mongoose';
const workExperienceSchema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
});
export default model("WorkExperience", workExperienceSchema);
//# sourceMappingURL=workExperience.js.map