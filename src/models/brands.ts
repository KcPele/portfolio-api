import {  Schema, model, InferSchemaType } from 'mongoose';
const brandSchema = new Schema({

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    name: {type: String, required: true},


})



export type IBrand = InferSchemaType<typeof brandSchema >

export default model<IBrand>("Brand", brandSchema)