import { Router } from "express"
import { postHabitatController, postAnimalsController, postEmergenciesController, postServicesController, postStaffsController, postTacoShopController } from "../controllers/postData.js";
import { animalsPostValidate, servicesPostValidate, habitatsPostValidate, staffPostValidate, taco_shopPostValidate, emergenciesPostValidate } from "../middlewares/resultValidate.js";
import * as DTO from "../middlewares/dataValidate.js";
import passportHelper from "../helpers/passport.js";
import { notAllowed } from "../controllers/getData.js";
import routesVersioning from "express-routes-versioning";
export const postInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", { session: false }));
    app.post("/habitats", DTO.habitatsDtoV1, habitatsPostValidate, version({
        "^1.0.0": postHabitatController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }));

    app.post("/animals", DTO.animalsDtoV1, animalsPostValidate, version({
        "^1.0.0": postAnimalsController,
        "2.0.1": notAllowed,
        "2.0.2": postAnimalsController,
        "2.0.3": notAllowed,
    }));

    app.post("/emergencies", DTO.emergenciesDtoV1, emergenciesPostValidate, version({
        "^1.0.0": postEmergenciesController,
        "2.0.1": notAllowed,
        "2.0.2": postAnimalsController,
        "2.0.3": notAllowed,
    }));

    app.post("/services", DTO.servicesDtoV1, servicesPostValidate, version({
        "^1.0.0": postServicesController,
        "2.0.1": postServicesController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }));

    app.post("/staffs", DTO.staffsDtoV1, staffPostValidate, version({
        "^1.0.0": postStaffsController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": postStaffsController,
    }));

    app.post("/tacoShop", DTO.taco_shopDtoV1, taco_shopPostValidate, version({
        "^1.0.0": postTacoShopController,
        "2.0.1": postTacoShopController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }));

    return app;
}