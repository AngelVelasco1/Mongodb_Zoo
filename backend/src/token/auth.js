import { SignJWT, jwtVerify } from "jose"
import { connect } from "../../db/connection.js" 
import { ObjectId } from "mongodb";
import config from "../utils/config.js";

const db = await connect();
const staff = await db.collection('staff'); // Depende de cual coleccion se validara con permisos
export const createToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Not enough data"});
    
    const { name, password } = req.body;
    if (!name || !password) return res.status(417).send({ message: "Must provide name and password" });
    
    const result = await staff.findOne(req.body)
    if (!result) return res.status(401).send({message: "Not authorized"});

    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(Buffer.from(config.key, 'utf-8'));
    req.data = {status: 200, message: jwtConstructor};
    next(); 
}
export const verifyToken = async (req, token) => {
    try {
        const jwtData = await jwtVerify(token, Buffer.from(config.key, 'utf-8'));
        const result = await staff.findOne({
                _id: new ObjectId(jwtData.payload.id), 
                [`allowances.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            });

        if(!result.allowances[req.baseUrl].includes(req.method)) {
            throw new Error("Not method allowed");
        }; 
        const {_id, allowances, ...session} = result;
        return session;
    } catch (error) { 
        return false;
    }
}