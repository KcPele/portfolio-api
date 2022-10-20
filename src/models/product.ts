import {  Schema, HydratedDocument, model, InferSchemaType, Model, Types } from 'mongoose';
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import User from './user';
dotenv.config()


const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    slug: {type: String},
    img: {
        contentType: String,
        buffer: Buffer
    },
    owner: {type: Schema.Types.ObjectId, ref:"User"},
    desc: {type: String, required: true},


},
{
    timestamps: true
})
productSchema.static('createNewProduct', async function createNewProduct(name: string, price: Number, contentType:string, buffer: Types.Buffer, token: string, desc: string) {
    console.log(name)
    try{

        const userId = jwt.verify(token, process.env.PRIVATE_KEY as string)as jwt.JwtPayload
        const user = await User.findById(userId._id)
        if(!user) {
            return {"error": "Invalid token"}
        } else {

           
            const product = await Product.create({name, price, img: {contentType, buffer}, owner: user, desc})
            return product
        }
    } catch(err: any) {
        return {"error": err.message as Error}
    }
  
});

productSchema.pre("save", function( next): void {
    this.slug = this.name.toLowerCase() + Date.now().toString()
    next()
})
export type IProduct = InferSchemaType<typeof productSchema >
interface ProductModel  extends Model<IProduct>{
    createNewProduct(name: string, price: Number, contentType:string, buffer: Types.Buffer, token: string, desc: string): Promise<HydratedDocument<IProduct>> | {error: string}
}
const Product = model<IProduct, ProductModel>("Product", productSchema)
export default Product 