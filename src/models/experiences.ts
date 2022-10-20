import {  Schema, model, InferSchemaType } from 'mongoose';
const experienceSchema = new Schema({
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



export type IExperience = InferSchemaType<typeof experienceSchema >

export default model<IExperience>("Experience", experienceSchema)