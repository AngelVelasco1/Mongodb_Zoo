import { collectionGen } from "../../db/connection.js";

class Emergencies{
    constructor(){};
    async connection(){
        try {
            const result = await collectionGen("emergencies");
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getEmergencies(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({}).toArray();
            return await connect.aggregate([{$match: {"id": parseInt(id)}}]);
        } catch (error) {
            throw error;
        }
    };
    async postEmergencies(data){
        try {
            const connect = await this.connection();
            const result = await connect.postOne({data});
            return result; 
        } catch (error) {
            throw error;
        }
    };
    async updateEmergencies(id, data){
        try {
            const connect = await this.connection();
            const result = await connect.updateOne({
                "id": parseInt(id)
            },{$set: data})
            return result;
        } catch (error) {
            throw error;
        }
    };

    async deleteEmergencies(id){
        try {
            const connect = await this.connection();
            const result = await connect.deleteOne({"id": parseInt(id)});
            return result;
        } catch (error) {
            throw error; 
        }
    }
} ;
export { Emergencies };