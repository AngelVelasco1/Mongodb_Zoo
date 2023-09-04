import { Router } from "express"
import { deleteHabitatController, deleteAnimalsController, deleteEmergenciesController, deleteServicesController, deleteStaffsController, deleteTacoShopController } from "../controllers/deleteData.js";
import { notAllowed } from "../controllers/getData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";
export const deleteInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", { session: false }));
    app.delete("/habitats", version({
        "^1.0.0": deleteHabitatController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))
    app.delete("/animals", version({
        "^1.0.0": deleteAnimalsController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))
    app.delete("/emergencies", version({
        "^1.0.0": deleteEmergenciesController,
        "2.0.1": notAllowed,
        "2.0.2": deleteEmergenciesController,
        "2.0.3": notAllowed,
    }))
    app.delete("/services", version({
        "^1.0.0": deleteServicesController,
        "2.0.1": deleteTacoShopController,
        "2.0.2": notAllowed,
        "2.0.3": deleteServicesController,
    }))
    app.delete("/staffs", version({
        "^1.0.0": deleteStaffsController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))
    app.delete("/tacoShop", version({
        "^1.0.0": deleteTacoShopController,
        "2.0.1": deleteTacoShopController,
        "2.0.2": notAllowed,
        "2.0.3": deleteServicesController,
    }));
    return app;
}