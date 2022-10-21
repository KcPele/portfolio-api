import { Schema, Model, Types, model } from 'mongoose';
import Tags from "./tags"


export interface IWork {
    title: String,
    description: String,
    projectLink: String,
    codeLink: String,
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    tags: Types.DocumentArray<typeof Tags>,

}


const workSchema = new Schema<IWork>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    projectLink: {type: String, required: true},
    codeLink: {type: String, required: true},

    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    tags: [{type: Schema.Types.ObjectId, ref: "Tag"}],


})



export default model<IWork>("Work", workSchema)