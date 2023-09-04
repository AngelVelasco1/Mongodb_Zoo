import { SignJWT, jwtVerify } from "jose"
import { connect } from "../../db/connection.js" 
import { ObjectId } from "mongodb";
import {CONFIG} from "../utils/config.js";

const db = await connect();
export const createToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Data not founded"});
    const result = await db.collection('session').findOne(req.body);
    if (JSON.stringify(Object.keys(req.body)) !== JSON.stringify(['name', 'password'])) return res.status(417).send({message: "el valor que debes suministrar para el inicio de la sesión debe ser el name y la password."})
    if (!result) return res.status(401).send({mesaage: "session no encontrada"});
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(CONFIG.key));
    req.data = {status: 200, message: jwtConstructor};
    next(); 
}
export const verifyToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(CONFIG.key)
        );
        let res = await db.collection('session').findOne(
            {
                _id: new ObjectId(jwtData.payload.id), 
                [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            }
        );
        const error = {message: "no tienes acceso a este método"}
        if(!res.permisos[req.baseUrl].includes(req.method)) return error; 
        let {_id, permisos, ...session} = res;
        return session;
    } catch (error) { 
        return false;
    }
}