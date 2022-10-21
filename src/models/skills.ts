import {  Schema, model, InferSchemaType } from 'mongoose';
const skillSchema = new Schema({
    name: {type: String, required: true},

    iconUrl: {
        contentType: String,
        buffer: Buffer
    },
    bgColor: {type: String, required: true},


})



export type ISkill = InferSchemaType<typeof skillSchema >

export default model<ISkill>("Skill", skillSchema)