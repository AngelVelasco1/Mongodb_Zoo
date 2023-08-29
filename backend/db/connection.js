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

