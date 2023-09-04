import { Router } from "express";
import * as controller from "../controllers/getData.js";
import passportHelper from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";
export const getInitRoute = () => {

    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", { session: false }));
    app.get("/habitats", version({
        "^1.0.0": controller.getHabitatsController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.getHabitatsController,
        "2.0.3": controller.notAllowed,
    }));
    app.get("/animals", version({
        "^1.0.0": controller.getAnimalsController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.getHabitatsController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/emergencies", version({
        "^1.0.0": controller.getEmergenciesController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.getEmergenciesController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/services", version({
        "^1.0.0": controller.getServicesController,
        "2.0.1": controller.getServicesController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/staffs", version({
        "^1.0.0": controller.getStaffsController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.getStaffsController,
    }))
    app.get("/tacoShop", version({
        "^1.0.0": controller.getTacoShopController,
        "2.0.1": controller.getServicesController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,
    })),
    app.get("/animalsByEntryY", version({
        "^1.0.0": controller.AnimalsByEntryYController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.AnimalsByEntryYController,
        "2.0.3": controller.notAllowed,
    }));
    app.get("/animalsDeath", version({
        "^1.0.0": controller.AnimalsDeathController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.AnimalsDeathController,
        "2.0.3": controller.notAllowed,
    }))

    app.get("/staffAnimals", version({
        "^1.0.0": controller.StaffAnimalsController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.StaffAnimalsController,
        "2.0.3": controller.StaffAnimalsController,
    }))
    app.get("/habitatAnimals", version({
        "^1.0.0": controller.HabitatAnimalsController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.HabitatAnimalsController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/animalsNoVacunes", version({
        "^1.0.0": controller.getAnimalsNoVacunesController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.getAnimalsNoVacunesController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/devolutions", version({
        "^1.0.0": controller.DevolutionsController,
        "2.0.1": controller.DevolutionsController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/lossMoney", version({
        "^1.0.0": controller.LossMoneyController,
        "2.0.1": controller.LossMoneyController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/balanceDay", version({
        "^1.0.0": controller.BalanceDayController,
        "2.0.1": controller.BalanceDayController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,

    }))
    app.get("/sellsMonth", version({
        "^1.0.0": controller.SellsMonthController,
        "2.0.1": controller.SellsMonthController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,

    }))
    app.get("/staffBySalary", version({
        "^1.0.0": controller.StaffBySalaryController,
        "2.0.3": controller.StaffBySalaryController,
        "2.0.2": controller.notAllowed,
        "2.0.1": controller.StaffBySalaryController,
    }))
    app.get("/staffOlder", version({
        "^1.0.0": controller.StaffOlderController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.StaffOlderController,

    }))
    app.get("/tacoInOrder", version({
        "^1.0.0": controller.TacoInOrderController,
        "2.0.1": controller.TacoInOrderController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/bestMonth", version({
        "^1.0.0": controller.BestMonthController,
        "2.0.1": controller.BestMonthController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.BestMonthController,
    }))
    app.get("/emergenciesByVet", version({
        "^1.0.0": controller.EmergenciesByVetController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.EmergenciesByVetController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/incidentsByAnimal", version({
        "^1.0.0": controller.IncidentsByAnimalController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.IncidentsByAnimalController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/betweenDates", version({
        "^1.0.0": controller.BetweenDatesController,
        "2.0.1": controller.notAllowed,
        "2.0.2": controller.BetweenDatesController,
        "2.0.3": controller.notAllowed,
    }))
    app.get("/bestSeller", version({
        "^1.0.0": controller.bestSellerController,
        "2.0.1": controller.bestSellerController,
        "2.0.2": controller.notAllowed,
        "2.0.3": controller.bestSellerController,
    }))
    return app;
}

