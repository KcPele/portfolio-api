import {  Schema, HydratedDocument, model, InferSchemaType, Model, Types } from 'mongoose';
import * as dotenv from "dotenv"
import User from './user';
dotenv.config()


const serviceSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    slug: {type: String},
    imgUrl: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    description: {type: String, required: true},


},
{
    timestamps: true
})
serviceSchema.static('createNewService', async function createNewService(name: string, price: Number, contentType:string, buffer: Types.Buffer, userId: string, description: string) {

    try{

        const user = await User.findById(userId)
        if(!user) {
            return {"error": "Invalid token"}
        } else {

           
            const service = await Service.create({name, price, img: {contentType, buffer}, owner: user, description})
            return service
        }
    } catch(err: any) {
        return {"error": err.message as Error}
    }
  
});

serviceSchema.pre("save", function( next): void {
    this.slug = this.name.toLowerCase() + Date.now().toString()
    next()
})
export type IService = InferSchemaType<typeof serviceSchema >
interface ServiceModel  extends Model<IService>{
    createNewService(name: string, price: Number, contentType:string, buffer: Types.Buffer, token: string, desc: string): Promise<HydratedDocument<IService>> | {error: string}
}
const Service = model<IService, ServiceModel>("Service", serviceSchema)
export default Service 