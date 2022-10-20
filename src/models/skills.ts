import {  Schema, model, InferSchemaType } from 'mongoose';
const skillSchema = new Schema({
    name: {type: String, required: true},

    icon: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    bgColor: {type: String, required: true},


},
{
    timestamps: true
})



export type ISkill = InferSchemaType<typeof skillSchema >

export default model<ISkill>("Skill", skillSchema)