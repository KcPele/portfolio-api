import {  Schema, model, InferSchemaType } from 'mongoose';
const aboutSchema = new Schema({
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



export type IAbout = InferSchemaType<typeof aboutSchema >

export default model<IAbout>("About", aboutSchema)