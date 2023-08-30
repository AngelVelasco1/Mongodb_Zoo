import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
    "server": JSON.parse(process.env.SERVER),
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "db": process.env.DB,
    "key": process.env.JWT_SECRET
};