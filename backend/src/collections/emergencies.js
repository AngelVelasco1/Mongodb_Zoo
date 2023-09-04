import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

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
            let body = { "id": siguienteId("emergencies") ,...data, "date": new Date(data.date)}; 
            const result = await connect.insertOne(body);
            return result; 
        } catch (error) {
            throw error;
        }
    };
    async updateEmergencies(id, data){
        try {
            const connect = await this.connection();
            let body = { ...data, "date": new Date(data.date) }
            const result = await connect.updateOne({
                "id": parseInt(id)
            },{$set: body})
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
    };

    // 15. traer todas los registros de emergencias que ha atendido un veterinario en específico
    async getEmergenciesByVet(id_vet){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        id_vet: parseInt(id_vet)
                    }
            
                },
                {
                    $project: {
                        _id: 0,
                        id: 0,
                        id_vet: 0
                    }
                }
            ]).toArray()
            return result
        } catch (error) {
            throw error;
        }
    };
    // 17. traer todas las emergencias ocurridas en un determinado plazo de fechas .
    async getEmergenciesBetweenDates(start, end){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        date: { $gte: new Date(start), $lte: new Date(end) }
                    }
                }
            ]).toArray()
            return result;
        } catch (error) {
            throw error; 
        }
    }
} ;
export { Emergencies };