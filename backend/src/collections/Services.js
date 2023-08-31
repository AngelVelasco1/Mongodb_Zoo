import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

class Services{
    /* aqui ingreso los datos como está construida la colección en la base de datos como una guia únicamente, estos valores no afectan el código, simplemente son una guia visual. */
    _id;
    id;
    shop;
    product_name;
    id_staff;
    date;
    amount;
    price;
    devolutions;
    reason;
    refund;
    constructor(){};

    async connection(){
        try {
            const result = await collectionGen("Services");
            return result;
        } catch (error) {
            throw error;
        }
    };
    async getServices(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({}).toArray();
            return await connect.aggregate([{$match: { "id": parseInt(id)}}]);
        } catch (error) {
            throw error;
        }
    };
    async postServices(data){
        try {
            const connect = await this.connection();
            /* arreglar el tema del siguienteID */
            const result = await connect.insertOne({ "id": siguienteId("Services") ,...data});
            return result;
        } catch (error) {
            throw error; 
        }
    };
    async updateServices(id, data){
        try {
            const connect = await this.connection();
            const result = await connect.updateOne(
                { "id": parseInt(id)},
                { $set: data }
            )
            return result;
        } catch (error) {
            throw error;
        }
    };
    async deleteServices(id){
        try {
            const connect = await this.connection();
            const result = await connect.deleteOne({"id": parseInt(id)});
            return result;
        } catch (error) {
            throw error;
        }
    }
};
export {Services};