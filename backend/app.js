import express from 'express'
import { CONFIG } from "./src/utils/config.js";
import { initRoutes } from './src/routes/router.js';
import { appLogin } from './src/routes/login.js';
const app = express();
app.use(express.json());

app.use("/login", appLogin);
app.use("/api", initRoutes())

app.listen(CONFIG.server, () => {
    console.log(`Server listening on http://${CONFIG.server.hostname}:${CONFIG.server.port}`);
})
