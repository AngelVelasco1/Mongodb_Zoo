import { Router } from "express"
import { postHabitatController, postAnimalsController, postEmergenciesController, postServicesController, postStaffsController, postTacoShopController } from "../controllers/postData.js";
import { animalsPostValidate, servicesPostValidate, habitatsPostValidate, staffPostValidate, taco_shopPostValidate,  emergenciesPostValidate} from "../middlewares/resultValidate.js";
import * as DTO from "../middlewares/dataValidate.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const postInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", {session: false}));

    app.post("/habitats", DTO.habitatsDtoV1, version({
        "^1.0.0": habitatsPostValidate,
        "^2.0.0": habitatsPostValidate,
    }), postHabitatController);

    app.post("/animals", DTO.animalsDtoV1, version({
        "^1.0.0": animalsPostValidate,
        "^2.0.0": animalsPostValidate,
    }), postAnimalsController);

    app.post("/emergencies", DTO.emergenciesDtoV1, version({
        "^1.0.0": emergenciesPostValidate,
        "^2.0.0": emergenciesPostValidate,
    }), postEmergenciesController);

    app.post("/services", DTO.servicesDtoV1, version({
        "^1.0.0": servicesPostValidate,
        "^2.0.0":  servicesPostValidate,
    }), postServicesController);

    app.post("/staffs", DTO.staffsDtoV1, version({
        "^1.0.0": staffPostValidate,
        "^2.0.0": staffPostValidate,
    }), postStaffsController);

    app.post("/tacoShop", DTO.taco_shopDtoV1, version({
        "^1.0.0": taco_shopPostValidate,
        "^2.0.0": taco_shopPostValidate,
    }), postTacoShopController);
    return app;
}