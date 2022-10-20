import {  Schema, model, InferSchemaType } from 'mongoose';
const profileSchema = new Schema({
    name: {type: String, required: true},

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},


},
{
    timestamps: true
})



export type IProfile = InferSchemaType<typeof profileSchema >

export default model<IProfile>("Profile", profileSchema)