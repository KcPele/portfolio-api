import {  Schema, model, InferSchemaType } from 'mongoose';
const workExperienceSchema = new Schema({
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



export type IWorkExperience = InferSchemaType<typeof workExperienceSchema >

export default model<IWorkExperience>("WorkExperience", workExperienceSchema)