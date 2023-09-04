import { collectionGen } from "../../db/connection.js";
import siguienteId from "../helpers/autoincrement.js";

class Services{
    /* aqui ingreso los datos como está construida la colección en la base de datos como una guia únicamente, estos valores no afectan el código, simplemente son una guia visual. */
    _id;
    id;
    shop;
    product_name;
    id_staff;
    date;
    amount;
    price;
    devolutions;
    reason;
    refund;
    constructor(){};

    async connection(){
        try {
            const result = await collectionGen("Services");
            return result;
        } catch (error) {
            throw error;
        }
    };
    async getServices(id){
        try {
            const connect = await this.connection();
            if(!id) return await connect.find({}).toArray();
            return await connect.aggregate([{$match: { "id": parseInt(id)}}]).toArray();
        } catch (error) {
            throw error;
        }
    };
    async postServices(data){
        try {
            const connect = await this.connection();
            let newId = await siguienteId("Services")
            let body = { id: newId  ,...data, "date": new Date(data.date)}
            console.log(body.id);
            const result = await connect.insertOne(body);
            return result;
        } catch (error) {
            throw error; 
        }
    };
    async updateServices(id, data){
        try {
            const connect = await this.connection();
            let body = { ...data, "date": new Date(data.date)}
            const result = await connect.updateOne(
                { "id": parseInt(id)},
                { $set: body }
            )
            return result;
        } catch (error) {
            throw error;
        }
    };
    async deleteServices(id){
        try {
            const connect = await this.connection();
            const result = await connect.deleteOne({"id": parseInt(id)});
            return result;
        } catch (error) {
            throw error;
        }
    };

    // 6. Traer todos las registros de servicio que tuvieron un rembolso y la razón
    async getDevolutions(){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $match: {
                        devolutions: {
                            $exists: true
                        }
                    }
                },
                {
                    $project: {
                      _id: 0,
                      ref_sell: "$id",
                      shop: "$shop",
                      returned_product: "$product_name",
                      amount: "$devolutions",
                      total_refunded: "$refund",
                      reason: "$reason"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    };

    // 7. Calcular cuanto dinero en total en un mes específico se “perdió” en los refounds amount*price - refund. (el parámetro month debe ser un numero entero de 1 a 12)

    async getLossMoney(month){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $project: {
                        total_factura: {
                            $multiply: [ "$amount", "$price" ]
                        },
                        _id: "$_id",
                        refund: "$refund",
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
                    },
                    total_refund: {
                      $sum: "$refund"
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
                      "total_sells": "$total_ventas",
                      "total_refund": "$total_refund",
                      "neto_win": {
                        $subtract: [ "$total_ventas", "$total_refund"]
                      }
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    };

    // 9. Calcular el total de ingresos en un mes específico en taquillería y servicios.

    async getSellsMonth(month){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $project: {
                        total_factura: {
                            $multiply: [ "$amount", "$price" ]
                        },
                        _id: "$_id",
                        refund: "$refund",
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
                    },
                    total_refund: {
                      $sum: "$refund"
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
                      "total_sells_services": {
                        $subtract: [ "$total_ventas", "$total_refund"]
                      }
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    } 

    // 14. Identificar cual fue el mes en que mas se vendieron entradas.
    async getBestMonth(){
        try {
            const connect = await this.connection();
            const result = await connect.aggregate([
                {
                    $project: {
                        month: { $substr: ["$date", 5, 2] },  //? saca el mes del string
                        amount: 1,
                        devolutions: 1,
                        price: 1   
                    }
                },
                {
                    $group: {
                        _id:  "$month",
                        sales: {    
                            $sum: {
                                $multiply: [
                                    { $subtract: ["$amount", "$devolutions"] },
                                    "$price"
                                ]
                            }
                        }
                    }
                },
                {
                    $sort: {
                        sales: -1
                    }
                },
                {
                    $limit: 1
                },
                {
                    $project: {
                        _id: 0,
                        "month_number": "$_id",
                        sales: 1,
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
};
export {Services};