import { Router } from "express"; 
import { limitPet } from "../helpers/limit.js";
import { createToken } from "../token/auth.js";
import { login } from "../controllers/login.js";

const appLogin = Router();

appLogin.use(limitPet(), createToken);

appLogin.post("/", login)
export {appLogin}