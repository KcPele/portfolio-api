import {  Schema, model, Types } from 'mongoose';
import WorkExperience, { IWorkExperience } from './workExperience';

export interface IExperience {
    year: String,
    works: Types.DocumentArray<IWorkExperience>,

}

const experienceSchema = new Schema<IExperience>({
    year: {type: String, required: true},
    works: [{type:Schema.Types.ObjectId,ref:"WorkExperience"}],


})


export default model<IExperience>("Experience", experienceSchema)