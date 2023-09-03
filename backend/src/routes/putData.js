import { Router } from "express";
import { putHabitatController, putAnimalsController, putEmergenciesController, putServicesController, putStaffsController, putTacoShopController } from "../controllers/putData.js";
import { animalsPostValidate, servicesPostValidate, habitatsPostValidate, staffPostValidate, taco_shopPostValidate,  emergenciesPostValidate} from "../middlewares/resultValidate.js";
import { animalsDtoV1, servicesDtoV1, habitatsDtoV1, staffDtoV1, taco_shopDtoV1, emergenciesDtoV1 } from "../middlewares/dataValidate.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const putInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer"), {session: false});

    app.put("/habitats", habitatsDtoV1, version({
        "^1.0.0": habitatsPostValidate,
        "^2.0.0": habitatsPostValidate,
    }), putHabitatController)

    app.put("/animals", animalsDtoV1, version({
        "^1.0.0": animalsPostValidate,
        "^2.0.0": animalsPostValidate,
    }), putAnimalsController)

    app.put("/emergencies", emergenciesDtoV1, version({
        "^1.0.0": emergenciesPostValidate,
        "^2.0.0": emergenciesPostValidate,
    }), putEmergenciesController)

    app.put("/services", servicesDtoV1, version({
        "^1.0.0": servicesPostValidate,
        "^2.0.0": servicesPostValidate,
    }), putServicesController)

    app.put("/staffs", staffDtoV1, version({
        "^1.0.0": staffPostValidate,
        "^2.0.0": staffPostValidate,
    }), putStaffsController)

    app.put("/tacoShop", taco_shopDtoV1, version({
        "^1.0.0": taco_shopPostValidate,
        "^2.0.0": taco_shopPostValidate,
    }), putTacoShopController)
}