import {  Schema, model, InferSchemaType } from 'mongoose';
const skillSchema = new Schema({
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



export type ISkill = InferSchemaType<typeof skillSchema >

export default model<ISkill>("Skill", skillSchema)