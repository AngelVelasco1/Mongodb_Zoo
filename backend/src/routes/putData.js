import { Router } from "express";
import { putHabitatController, putAnimalsController, putEmergenciesController, putServicesController, putStaffsController, putTacoShopController } from "../controllers/putData.js";
import { animalsPostValidate, servicesPostValidate, habitatsPostValidate, staffPostValidate, taco_shopPostValidate, emergenciesPostValidate } from "../middlewares/resultValidate.js";
import { animalsDtoV1, servicesDtoV1, habitatsDtoV1, staffsDtoV1, taco_shopDtoV1, emergenciesDtoV1 } from "../middlewares/dataValidate.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

import { notAllowed } from "../controllers/getData.js";
export const putInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", { session: false }));
    app.put("/habitats", habitatsDtoV1, habitatsPostValidate, version({
        "^1.0.0": putHabitatController,
        "2.0.1": notAllowed,
        "2.0.2": putHabitatController,
        "2.0.3": notAllowed,
    }))
    app.put("/animals", animalsDtoV1, animalsPostValidate, version({
        "^1.0.0": putAnimalsController,
        "2.0.1": notAllowed,
        "2.0.2": putAnimalsController,
        "2.0.3": notAllowed,
    }))
    app.put("/emergencies", emergenciesDtoV1, emergenciesPostValidate, version({
        "^1.0.0": putEmergenciesController,
        "2.0.1": notAllowed,
        "2.0.2": putEmergenciesController,
        "2.0.3": notAllowed,
    }))
    app.put("/services", servicesDtoV1, servicesPostValidate, version({
        "^1.0.0": putServicesController,
        "2.0.1": putServicesController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))
    app.put("/staffs", staffsDtoV1, staffPostValidate, version({
        "^1.0.0": putStaffsController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": putStaffsController,
    }))
    app.put("/tacoShop", taco_shopDtoV1, taco_shopPostValidate, version({
        "^1.0.0": putTacoShopController,
        "2.0.1": putTacoShopController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))
    return app;
}