import { Model, HydratedDocument } from 'mongoose';
export interface IUser {
    email: string;
    password: string;
}
export interface IUserCreated extends IUser {
    token: string;
}
interface UserModel extends Model<IUserCreated> {
    createNewUser(email: string, password: string): Promise<HydratedDocument<IUserCreated>> | {
        error: string;
    };
    loginUser(email: string, password: string): Promise<HydratedDocument<IUserCreated>> | {
        error: string;
    };
}
declare const User: UserModel;
export default User;
