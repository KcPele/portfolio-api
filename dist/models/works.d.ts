/// <reference types="node" />
import { Model, Types } from 'mongoose';
import Tags from "./tags";
export interface IWork {
    title: String;
    description: String;
    projectLink: String;
    codeLink: String;
    imgUrl: {
        contentType: String;
        buffer: Buffer;
    };
    tags: Types.DocumentArray<typeof Tags>;
}
declare const _default: Model<IWork, {}, {}, {}, any>;
export default _default;
