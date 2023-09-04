import { Router } from "express";
import { getHabitatsController, getAnimalsController, getEmergenciesController, getServicesController, getStaffsController, getTacoShopController } from "../controllers/getData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const getInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer"), {session: false});

    app.get("/habitats", version({
        "^1.0.0": getHabitatsController,
        "^2.0.0": getHabitatsController,
    }));

    app.get("/animals", version({
        "^1.0.0": getAnimalsController,
        "^2.0.0": getAnimalsController,
    }))

    app.get("/emergencies", version({
        "^1.0.0": getEmergenciesController,
        "^2.0.0": getEmergenciesController,
    }))

    app.get("/services", version({
        "^1.0.0": getServicesController,
        "^2.0.0": getServicesController,
    }))

    app.get("/staffs", version({
        "^1.0.0": getStaffsController,
        "^2.0.0": getStaffsController,
    }))

    app.get("/tacoShop", version({
        "^1.0.0": getTacoShopController,
        "^2.0.0": getTacoShopController,
    }))
    
}