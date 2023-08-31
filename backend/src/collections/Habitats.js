import { collectionGen } from "../../db/connection.js";

class Habitat{
        /* aqui ingreso los datos como está construida la colección en la base de datos como una guia únicamente, estos valores no afectan el código, simplemente son una guia visual. */
    _id;
    id;
    name;
    description;
    weather;
    residents;
    assigned_personnel;
    next_maintenance;
    constructor(){}

    async connection(){
        try {
            const result = await collectionGen("Habitats");
            return result;
        } catch (error) {
            throw error;
        }
    };
    /* CRUD querys */
    async getHabitat(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({}).toArray();
            return await connect.aggregate([
                {$match: {"id": parseInt(id)}}
            ]).toArray();
        } catch (error) {
            throw error;
        }
    }
    async postHabitat(data){
        try {
            const connect = await this.connection();
            /* arreglar el tema del siguienteID */
            const result = await connect.insertOne(data)
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateHabitat(id, data){
        try {
            const connect = await this.connection();
            const result = await connect.updateOne(
                {"id": parseInt(id)},
                {$set: data}
            );
            return result; 
        } catch (error) {
            throw error;
        }
    };
    async deleteHabitat(id){
        try {
            const connect = await this.connection();
            const result = await connect.deleteOne({"id": parseInt(id)});  
            return result
        } catch (error) {
            throw error;
        }
    }
}
export { Habitat }