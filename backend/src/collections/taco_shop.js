import { collectionGen } from "../../db/connection.js";

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
            const result = await connect.postOne(data);
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
    }
};
export { tacoShop };