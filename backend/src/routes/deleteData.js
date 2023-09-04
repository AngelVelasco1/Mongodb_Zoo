import { Router } from "express"
import { deleteHabitatController, deleteAnimalsController, deleteEmergenciesController, deleteServicesController, deleteStaffsController, deleteTacoShopController} from "../controllers/deleteData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";


export const deleteInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", {session: false}));

    app.delete("/habitats", version({
        "^1.0.0": deleteHabitatController
    }))

    app.delete("/animals", version({
        "^1.0.0": deleteAnimalsController,
    }))

    app.delete("/emergencies", version({
        "^1.0.0": deleteEmergenciesController,
    }))

    app.delete("/services", version({
        "^1.0.0": deleteServicesController,
    }))

    app.delete("/staffs", version({
        "^1.0.0": deleteStaffsController,
    }))

    app.delete("/tacoShop", version({
        "^1.0.0": deleteTacoShopController,
    }));
    return app;
}