import {  Schema, model, InferSchemaType } from 'mongoose';
const workSchema = new Schema({
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



export type IWork = InferSchemaType<typeof workSchema >

export default model<IWork>("Work", workSchema)