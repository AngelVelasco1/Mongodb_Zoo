import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

class Staff{
    _id;
    id;
    full_name;
    start_contract;
    end_contract;
    salary;
    eps;
    phone_number;
    emergency_contact;
    "emergency_contact.contact_name";
    "emergency_contact.relationship";
    "emergency_contact.contact_number";
    constructor(){}
    async connection(){
        try {
            const result = await collectionGen("staff");
            return result;
        } catch (error) {
            throw error;            
        }
    };
    async getStaff(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({});
            return await connect.aggregate([{$match: {"id": parseInt(id)}}]);
        } catch (error) {
            throw error;
        }
    };
    async postStaff(data){
        try {
            const connect = await this.connection();
            /* arreglar el tema del siguienteID */
            const result = await connect.insertOne({ "id": siguienteId("staff") ,...data});
            return result;
        } catch (error) {
            throw error;
        }
    };
    async updateStaff(id, data){
        try {
            const connect = await this.connection();
            const result = await connect.updateOne(
                {"id": parseInt(id)},
                {$set: data}
            )
            return result;
        } catch (error) {
            throw error; 
        }
    }; 
    async deleteStaff(id){
        try {
            const connect = await this.connection();
            const result = await connect.deleteOne({"id": parseInt(id)})
            return result;
        } catch (error) {
            throw error;
        }
    }
};
export {Staff};