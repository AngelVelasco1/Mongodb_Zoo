import { Router } from "express"
import { getInitRoute } from "./getData.js";
import { postInitRoute } from "./postData";
import { putInitRoute } from "./putData";
import { deleteInitRoute } from "./deleteData";
import { limitPet } from "../helpers/limit.js";

export const initRoutes = () => {
    const app = Router();
    app.use("use", limitPet(), getInitRoute());
    app.use("use", limitPet(), postInitRoute());
    app.use("use", limitPet(), putInitRoute());
    app.use("use", limitPet(), deleteInitRoute());
}