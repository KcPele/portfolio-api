import {  Schema, model, InferSchemaType } from 'mongoose';
const tagSchema = new Schema({

    tag: {type: String, required: true},


},
{
    timestamps: true
})



export type ITag = InferSchemaType<typeof tagSchema >

export default model<ITag>("Tag", tagSchema)