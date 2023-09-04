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
            if(!id) return await connect.find({}).toArray();
            return await connect.aggregate([{$match: {"id": parseInt(id)}}]).toArray();
        } catch (error) {
            throw error;
        }
    };
    async postAnimals(data){
        try {
            const connect = await this.connection();
            let body = { "id": siguienteId("Animals") ,...data, "entry_date": new Date(data.entry_date), "death_date": new Date(data.death_date)}
            if(body.death_date === undefined) delete body.death_date; 
            const result = await connect.insertOne(body);
            return result; 
        } catch (error) {
            throw error;
        }
    };
    async updateAnimals(id, data){
        try {
            const connect = await this.connection();
            let body = {...data, "entry_date": new Date(data.entry_date), "death_date": new Date(data.death_date)}
            if(body.death_date === undefined) delete body.death_date;
            const result = await connect.updateOne(
                {"id": parseInt(id)},
                {$set: body}
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
    };

    // 1. obtener los animales ingresados en un año específico
    async getAnimalsByEntryY(year){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $addFields: {
                      entryYear: { $year: "$entry_date" }
                    }
                },
                {
                    $match: {
                        entryYear: parseInt(year)
                    }  
                },
                {
                    $project: {
                        _id: 0,
                        id_animal: "$id",
                        entry_year: "$entryYear", 
                        nombre: "$animal_name",
                        specie: "$species",
                        age: "$aprox_age",
                        habitat: "$location",
                        type: "$origin",
                        vacunes: "$vacune",
                        descendence: "$descendents",
                        entry_day: "$entry_date",
                        death: "$death_date",
                        more_info: "$reason"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    };

    //2. traer todos los animales que han fallecido.
    async getAnimalsDeath(){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        death_date: {
                            $exists: true
                      }
                    }  
                },
                {
                    $project: {
                        _id: 0,
                        id_animal: "$id",
                        entry_year: "$entryYear", 
                        nombre: "$animal_name",
                        specie: "$species",
                        age_lived: "$aprox_age",
                        entry_zoo: "$entry_date",
                        death: "$death_date",
                        death_cause: "$reason"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    };

    // 5. Traer todos los animales que no tienen vacunas.(si el animal ya murió simplemente no lo muestra)
    async getAnimalsNoVacunes(){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                { 
                    $match:{
                        vacune: { $eq: 0}
                    }
                },
                { 
                    $match: {
                        death_date: {
                            $exists: false
                        }
                    }
                },
                { 
                    $project: {
                      _id: 0,
                      id_animal: "$id",
                      vacunes: "$vacune",
                      nombre: "$animal_name",
                      specie: "$species",
                      age: "$aprox_age",
                      habitat: "$location",
                      type: "$origin",
                      entry: "$entry_date",
                      info: "$reason"
                    }
                },
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

    // 16. traer todos los incidentes que ha tenido un animal en su historia.
    async getIncidentsByAnimal(id){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $lookup: {
                        from: "emergencies",
                        localField: "id",
                        foreignField: "id_animal",
                        as: "incidents"
                    }
                },
                {
                    $unwind: "$incidents"
                },
                {
                    $match: {
                        "incidents.id_animal": parseInt(id)
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id: 0,
                        "incidents.id": 0,
                        "incidents.id_animal": 0,
                        "incidents._id": 0,
                        "incidents.id_vet": 0
            
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

};

export {Animals};