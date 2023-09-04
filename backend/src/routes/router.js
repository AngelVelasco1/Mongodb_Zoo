import { Router } from "express"
import { getInitRoute } from "./getData.js";
import { postInitRoute } from "./postData.js";
import { putInitRoute } from "./putData.js";
import { deleteInitRoute } from "./deleteData.js";
import { limitPet } from "../helpers/limit.js";

export const initRoutes = () => {
    const app = Router();
    app.use("/use", limitPet(), getInitRoute());
    app.use("/use", limitPet(), postInitRoute());
    app.use("/use", limitPet(), putInitRoute());
    app.use("/use", limitPet(), deleteInitRoute());
    return app;
}