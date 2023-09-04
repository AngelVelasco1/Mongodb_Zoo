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
    };

    // 3. obtener todos los animales bajo el cargo de un cuidador en específico.
    async getStaffAnimals(id){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        id: parseInt(id)
                    }
                },
                {
                    $match: {
                        end_contract: {
                            $exists: false
                        }
                    }
                },
                {
                    $lookup: {
                      from: "Animals",
                      localField: "id",
                      foreignField: "id_staff",
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
                      as: "AnimalsAssigned"
                    }
                },
                {
                    $project: {
                      _id: 0,
                      id_staff: "$id",
                      name: "$full_name",
                      start: "$start_contract",
                      salary_cost: "$salary",
                      EPS: "$eps",
                      contact: "$phone_number",
                      emergency_info: "$emergency_contact",
                      emergency_info: {
                        name: "$emergency_contact.contact_name",
                        relationship: "$emergency_contact.relationship",
                        number: "$emergency_contact.contact_number"
                      },
                      animals_assigned: "$AnimalsAssigned"
                    }
                }
            ]).toArray();
            return result; 
        } catch (error) {
            throw error; 
        }
    };

    // 10. Mirar cual el empleado con más ventas en un mes en específico. con info del empleado y sus ventas.
    async getStaffBestSeller(){
        try {
            const connect = await this.connection();
            const result = await connect.toArray();
            return result; 
        } catch (error) {
            throw error; 
        }
    };


    // 11. obtener los empleados por salario.
    async getStaffBySalary(salary){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        salary: { $eq: parseInt(salary) } 
                    }
                },
                {
                    $sort: {
                        salary: -1
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id: 0,
                        emergency_contact: 0,
                        eps: 0
                    }
                }
            ]).toArray();
            return result; 
        } catch (error) {
            throw error; 
        }
    };
    
    // 12. Traer el empleado con mayor antiguedad que sigua trabajando .
    async getOldestEmploy(){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        "end_contract": {$exists: false}
                    }
                },
                {
                    $sort: {
                        "start_contract": -1
                    }
                },
                {
                    $limit: 1
                },
                {
                    $project: {
                        _id: 0,
                        full_name: 1,
                        start_contract: 1,
                        salary: 1,
                        eps: 1,
                        phone_number: 1
                    }
                }
            ]).toArray();
            return result; 
        } catch (error) {
            throw error; 
        }
    };
};
export {Staff};