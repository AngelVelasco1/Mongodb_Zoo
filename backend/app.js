import config from "./src/utils/config.js";
import express  from "express";

const app = express();


app.listen(config.server, ()=>{
    console.log(`El servidor está activo: http://${config.server.hostname}:${config.server.port}`);
});