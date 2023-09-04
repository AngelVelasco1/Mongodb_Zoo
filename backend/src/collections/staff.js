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
            let body = { "id": siguienteId("staff") ,...data, "start_contract": new Date(data.start_contract), "end_contract": new Date(data.end_contract)}
            if(body.end_contract === undefined) delete body.end_contract;
            const result = await connect.insertOne(body);
            return result;
        } catch (error) {
            throw error;
        }
    };
    async updateStaff(id, data){
        try {
            const connect = await this.connection();
            let body = { ...data, "start_contract": new Date(data.start_contract), "end_contract": new Date(data.end_contract)}
            if(body.end_contract === undefined) delete body.end_contract;
            const result = await connect.updateOne(
                {"id": parseInt(id)},
                {$set: body}
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