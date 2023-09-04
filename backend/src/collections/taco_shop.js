import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

class tacoShop {
    constructor(){};
    async connection(){
        try {
            const result = await collectionGen("taco_shop");
            return result;
        } catch (error) {
            throw error;
        }
    };
    async getTacoShop(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({}).toArray();
            return await connect.aggregate([{$match: {"id": parseInt(id)}}]);
        } catch (error) {
            throw error;
        }
    };
    async postTacoShop(data){
        try {
            const connect = await this.connection();
            let body = { "id": siguienteId("taco_shop") ,...data, "date": new Date(data.date)}
            const result = await connect.insertOne(body);
            return result;
        } catch (error) {
            throw error;
        }
    };
    async updateTacoShop(id, data){
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
    async deleteTacoShop(id){
        try {
            const connect = await this.connection();
            const result = await connect.deleteOne({"id":parseInt(id)});
            return result;
        } catch (error) {
            throw error; 
        }
    };

    // 8. Calcular el total de ingresos de un día específico por taquillería.
    async getTacoBalanceDaily(date){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $project: {
                        total_factura: {
                            $multiply: [ "$amount", "$ticket_price" ]
                        },
                        _id: "$_id",
                        date: "$date"
                    }
                },
                {
                    $group: {
                      _id:  "$date",
                      total_ventas: {
                        $sum: "$total_factura"  
                      }
                    }
                },
                {
                    $match: {
                        _id: { $eq: new Date(date) }
                    }
                },
                {
                    $project: {
                      "day_search": "$_id",
                      _id: 0,
                      "total_sells_taco": "$total_ventas"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    } 

    // 9. Calcular el total de ingresos en un mes específico en taquillería y servicios.

    async getTacoSellsMonth(month){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $project: {
                        total_factura: {
                            $multiply: [ "$amount", "$ticket_price" ]
                        },
                        _id: "$_id",
                        date: "$date"
                    }
                },
                {
                    $group: {
                      _id: {
                        $month: "$date"
                      },
                      total_ventas: {
                        $sum: "$total_factura"  
                      }
                    }
                },
                {
                    $match: {
                        _id: { $eq: parseInt(month) }
                    }
                },
                {
                    $project: {
                      "month": "$_id",
                      _id: 0,
                      "total_sells_taco": "$total_ventas"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    } 

    // 13. ordenar por tipo de ticket y la cantidad total.
    async getTacoInOrder(){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $group: {
                        _id: "$ticket_type",
                        total: { $sum: "$amount" }
                    }
                },
                {
                    $sort: {
                        total: -1,
                    }
                },
                {
                    $project: {
                        _id: 0,
                        tickect_type: "$_id",
                        total: "$total"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    } 
};
export { tacoShop };