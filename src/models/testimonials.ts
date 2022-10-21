import {  Schema, model, InferSchemaType } from 'mongoose';
const testimonialSchema = new Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    feedback: {type: String, required: true},


})



export type ITestimonial = InferSchemaType<typeof testimonialSchema >

export default model<ITestimonial>("Testimonial", testimonialSchema)