/// <reference types="node" />
import { Schema, HydratedDocument, InferSchemaType, Model, Types } from 'mongoose';
declare const serviceSchema: Schema<any, Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    description: string;
    name: string;
    price: number;
    imgUrl?: {
        contentType?: string | undefined;
        buffer?: Buffer | undefined;
    } | undefined;
    owner?: Types.ObjectId | undefined;
    slug?: string | undefined;
}>;
export declare type IService = InferSchemaType<typeof serviceSchema>;
interface ServiceModel extends Model<IService> {
    createNewService(name: string, price: Number, contentType: string, buffer: Types.Buffer, token: string, desc: string): Promise<HydratedDocument<IService>> | {
        error: string;
    };
}
declare const Service: ServiceModel;
export default Service;
