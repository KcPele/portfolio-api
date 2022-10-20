
import * as dotenv from 'dotenv'
dotenv.config();
import { Model, Schema, HydratedDocument, model } from 'mongoose';
import {createNewUser, loginUser} from "../controllers/user"


export interface IUser {
  email: string;
  password: string;
}

export interface IUserCreated extends IUser {
    token: string
}

interface UserModel extends Model<IUserCreated> {
  createNewUser(email: string, password: string): Promise<HydratedDocument<IUserCreated>> | {error: string};
  loginUser(email: string, password: string): Promise<HydratedDocument<IUserCreated>> |{error: string};
}

const schema = new Schema<IUser, UserModel>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

schema.static('createNewUser', createNewUser);

schema.static('loginUser', loginUser);


const User =  model<IUser, UserModel>('User', schema);

export default User


