import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

class Animals{
    _id;
    id;
    animal_name;
    species;
    aprox_age;
    location;
    descendents;
    origin;
    vacune;
    entry_date;
    death_date;
    reason;
    constructor(){};
    async connection(){
        try {
            const result = await collectionGen("Animals");
            return result;
        } catch (error) {
            throw error; 
        }
    };
    async getAnimals(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({});
            return await connect.aggregate([{$match: {"id": parseInt(id)}}]);
        } catch (error) {
            throw error;
        }
    };
    async postAnimals(data){
        try {
            const connect = await this.connection();
            const result = await connect.insertOne({ "id": siguienteId("Animals") ,...data});
            return result; 
        } catch (error) {
            throw error;
        }
    };
    async updateAnimals(id, data){
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
    async deleteAnimals(id){
        try {
            const connect = await this.connection();
            const result  = await connect.deleteOne({"id": parseInt(id)});
            return result;
        } catch (error) {
            throw error;
        }
    }
};

export {Animals};