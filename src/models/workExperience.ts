import {  Schema, model, InferSchemaType } from 'mongoose';
const workExperienceSchema = new Schema({
    name: {type: String, required: true},
    company: {type: String, required: true},

    
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    desc: {type: String, required: true},


},
{
    timestamps: true
})



export type IWorkExperience = InferSchemaType<typeof workExperienceSchema >

export default model<IWorkExperience>("WorkExperience", workExperienceSchema)