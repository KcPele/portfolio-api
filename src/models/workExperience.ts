import {  Schema, model, InferSchemaType } from 'mongoose';
const workExperienceSchema = new Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String, required: true},


})



export type IWorkExperience = InferSchemaType<typeof workExperienceSchema >

export default model<IWorkExperience>("WorkExperience", workExperienceSchema)