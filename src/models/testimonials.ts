import {  Schema, model, InferSchemaType } from 'mongoose';
const testimonialSchema = new Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    feedback: {type: String, required: true},


},
{
    timestamps: true
})



export type ITestimonial = InferSchemaType<typeof testimonialSchema >

export default model<ITestimonial>("Testimonial", testimonialSchema)