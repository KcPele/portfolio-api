import {  Schema, model, InferSchemaType } from 'mongoose';
const brandSchema = new Schema({
   

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    name: {type: String, required: true},


},
{
    timestamps: true
})



export type IBrand = InferSchemaType<typeof brandSchema >

export default model<IBrand>("Brand", brandSchema)