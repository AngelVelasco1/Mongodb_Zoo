import { Router } from "express"
import { postHabitatsController, postAnimalsController, postEmergenciesController, postServicesController, postStaffsController, postTacoShopController } from "../controllers/postData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const postInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer"), {session: false});

    app.post("/habitats", version({
        "^1.0.0": postHabitatsController,
        "^2.0.0": postHabitatsController,
        "3.0.0": notAllowed
    }));

    app.post("/animals", version({
        "^1.0.0": postAnimalsController,
        "^2.0.0": postAnimalsController,
        "3.0.0": notAllowed
    }))

    app.post("/emergencies", version({
        "^1.0.0": postEmergenciesController,
        "^2.0.0": postEmergenciesController,
        "3.0.0": notAllowed
    }))

    app.post("/services", version({
        "^1.0.0": postServicesController,
        "^2.0.0": postServicesController,
        "3.0.0": notAllowed
    }))

    app.post("/staffs", version({
        "^1.0.0": postStaffsController,
        "^2.0.0": postStaffsController,
        "3.0.0": notAllowed
    }))

    app.post("/tacoShop", version({
        "^1.0.0": postTacoShopController,
        "^2.0.0": postTacoShopController,
        "3.0.0": notAllowed
    }))
}