import * as mongoose from 'mongoose';

export class UserModel {

    username: string;
    email: string;
    password: string
         
}

export const UserSchema = new mongoose.Schema ({

    username: String,
    email: String,
    password: String,
     
});