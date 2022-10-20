import { Schema, Model, Types, model } from 'mongoose';
import Tags from "./tags"


interface IWork {
    title: String,
    description: String,
    projectLink: String,
    codeLink: String,
    imgUrl: {
        contentType: String,
        buffer: Types.Buffer
    },
    tags: Types.DocumentArray<typeof Tags>,
    owner: Types.ObjectId

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
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    tags: [Tags],


},
{
    timestamps: true
})



export default model<IWork>("Work", workSchema)