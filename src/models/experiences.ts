import {  Schema, model, Types } from 'mongoose';
import WorkExperience, { IWorkExperience } from './workExperience';

interface IExperience {
    year: String,
    works: Types.DocumentArray<IWorkExperience>,
    owner: Types.ObjectId

}

const experienceSchema = new Schema<IExperience>({
    year: {type: String, required: true},
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    works: [WorkExperience],


},
{
    timestamps: true
})


export default model<IExperience>("Experience", experienceSchema)