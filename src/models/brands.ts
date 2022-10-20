import {  Schema, model, InferSchemaType } from 'mongoose';
const brandSchema = new Schema({
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



export type IBrand = InferSchemaType<typeof brandSchema >

export default model<IBrand>("Brand", brandSchema)