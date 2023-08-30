<<<<<<< HEAD
import { MongoClient } from 'mongodb';
import { CONFIG } from '../src/utils/config.js'

const uri = `mongodb+srv://${CONFIG.user}:${CONFIG.password}@cluster0.tfk8jyc.mongodb.net/${CONFIG.db}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    retryWrites: true
};
const client = await MongoClient.connect(uri, options);

export const getConx = async () => {
    try {
        return client.db();
    } 
    catch (err) {
        return {
            status: 500,
            err: err
        }
    }
}

export const endConx = async () => {
    await client.close();
    console.log('Connection closed');
}

=======
import config from "../src/utils/config.js";
import { MongoClient } from "mongodb";

let dbConnection = null;

export async function connect(){
    if(dbConnection){
        return dbConnection;
    };
    try {
        const uri = `mongodb+srv://${config.user}:${config.password}@cluster0.mqhexgk.mongodb.net/${config.db}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const cliente = await MongoClient.connect(uri, options);
        dbConnection = cliente.db();
        return dbConnection;
    } catch (error) {
        return {status: 500, message: error}
    }
};

export const collectionGen = async (colecction) =>{
    const db = await connect();
    const newCollection = db.collection(colecction);
    return newCollection;
};
>>>>>>> david
