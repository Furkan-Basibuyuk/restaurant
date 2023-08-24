import * as mongoose from 'mongoose';

export class RestourantModel {
    id: string;
    name: string;
    adress: string;
    items: string[]
         
}

export const RestourantSchema = new mongoose.Schema ({
    id: String,
    name: String,
    adress: String,
    items: Array<String>,
     
});