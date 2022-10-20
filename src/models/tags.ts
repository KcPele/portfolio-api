import {  Schema, model, InferSchemaType } from 'mongoose';
const tagSchema = new Schema({
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



export type ITag = InferSchemaType<typeof tagSchema >

export default model<ITag>("Tag", tagSchema)