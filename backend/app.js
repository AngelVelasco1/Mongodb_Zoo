import express from 'express'
import { CONFIG } from "./src/utils/config.js";

const app = express();
app.use(express.json());

app.listen(CONFIG.server, () => {
    console.log(`Server listening on http://${CONFIG.server.hostname}:${CONFIG.server.port}`);
})
