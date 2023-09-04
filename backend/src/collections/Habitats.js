import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

class Habitat{
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
            let body = { "id": siguienteId("Habitats") ,...data, "next_maintenance": new Date(date.next_maintenance)};
            const result = await connect.insertOne(body)
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateHabitat(id, data){
        try {
            const connect = await this.connection();
            let body = {...data, "next_maintenance": new Date(date.next_maintenance)};
            const result = await connect.updateOne(
                {"id": parseInt(id)},
                {$set: body}
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

    // 4. obtener los animales que están actualmente viviendo en un habitat en específico. (el id de entrada es el id del habitat)
    async getHabitatAnimals(id){
        try {
            const connect = await this.connection();
            const result=  await connect.aggregate([
                {
                    $match: {
                      id: parseInt(id)
                    }
                },
                {
                    $lookup: {
                      from: "Animals",
                      localField: "name",
                      foreignField: "location",
                      pipeline: [
                        { 
                            $project: {
                              _id: 0,
                              id_animal: "$id",
                              nombre: "$animal_name",
                              specie: "$species",
                              age: "$aprox_age",
                              habitat: "$location",
                              type: "$origin",
                              vacunes: "$vacune",
                              entry: "$entry_date",
                              death: "$death_date",
                              reason: "$reason"
                            }
                        },
                        { $match: {
                           death: {
                                $exists: false
                          }
                        }}
                      ],
                      as: "animals"
                    }
                },
                {
                    $project: {
                      _id: 0,
                      habitat_id: "$id",
                      habitat: "$name",
                      weather_required: "$weather",
                      maintenance_date: "$next_maintenance",
                      main_staff: "$assigned_personnel",
                      habitat_description: "$description",
                      residents: "$animals"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

}
export { Habitat }