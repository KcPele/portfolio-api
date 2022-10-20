import {  Schema, model, InferSchemaType } from 'mongoose';
const testimonialSchema = new Schema({
    title: {type: String, required: true},

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    desc: {type: String, required: true},


},
{
    timestamps: true
})



export type ITestimonial = InferSchemaType<typeof testimonialSchema >

export default model<ITestimonial>("Testimonial", testimonialSchema)