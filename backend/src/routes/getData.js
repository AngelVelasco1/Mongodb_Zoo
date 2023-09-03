import { Router } from "express";
import { getHabitatsController, getAnimalsController, getEmergenciesController, getServicesController, getStaffsController, getTacoShopController, notAllowed } from "../controllers/getData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const getInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer"), {session: false});

    app.get("/habitats", version({
        "^1.0.0": getHabitatsController,
        "^2.0.0": getHabitatsController,
        "3.0.0": notAllowed
    }));

    app.get("/animals", version({
        "^1.0.0": getAnimalsController,
        "^2.0.0": getAnimalsController,
        "3.0.0": notAllowed
    }))

    app.get("/emergencies", version({
        "^1.0.0": getEmergenciesController,
        "^2.0.0": getEmergenciesController,
        "3.0.0": notAllowed
    }))

    app.get("/services", version({
        "^1.0.0": getServicesController,
        "^2.0.0": getServicesController,
        "3.0.0": notAllowed
    }))

    app.get("/staffs", version({
        "^1.0.0": getStaffsController,
        "^2.0.0": getStaffsController,
        "3.0.0": notAllowed
    }))

    app.get("/tacoShop", version({
        "^1.0.0": getTacoShopController,
        "^2.0.0": getTacoShopController,
        "3.0.0": notAllowed
    }))
    
}