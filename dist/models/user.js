import * as dotenv from 'dotenv';
dotenv.config();
import { Schema, model } from 'mongoose';
import { createNewUser, loginUser } from "../controllers/user";
const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
schema.static('createNewUser', createNewUser);
schema.static('loginUser', loginUser);
const User = model('User', schema);
export default User;
//# sourceMappingURL=user.js.map