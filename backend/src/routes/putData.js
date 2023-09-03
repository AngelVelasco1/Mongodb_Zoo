import { Router } from "express";
import { putHabitatController, putAnimalsController, putEmergenciesController, putServicesController, putStaffsController, putTacoShopController } from "../controllers/putData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const putInitRoute = () => {
    const app = Router();
    const version = routesVersioning();

    app.put("/habitats", version({
        "^1.0.0": putHabitatController,
        "^2.0.0": putHabitatController,
        "3.0.0": notAllowed
    }))

    app.put("/animals", version({
        "^1.0.0": putAnimalsController,
        "^2.0.0": putAnimalsController,
        "3.0.0": notAllowed
    }))

    app.put("/emergencies", version({
        "^1.0.0": putEmergenciesController,
        "^2.0.0": putEmergenciesController,
        "3.0.0": notAllowed
    }))

    app.put("/services", version({
        "^1.0.0": putServicesController,
        "^2.0.0": putServicesController,
        "3.0.0": notAllowed
    }))

    app.put("/staffs", version({
        "^1.0.0": putStaffsController,
        "^2.0.0": putStaffsController,
        "3.0.0": notAllowed
    }))

    app.put("/tacoShop", version({
        "^1.0.0": putTacoShopController,
        "^2.0.0": putTacoShopController,
        "3.0.0": notAllowed
    }))
}