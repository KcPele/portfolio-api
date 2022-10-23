import { Schema, model } from 'mongoose';
const testimonialSchema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    imgUrl:{ type: String, required: true },
    feedback: { type: String, required: true },
});
export default model("Testimonial", testimonialSchema);
//# sourceMappingURL=testimonials.js.map