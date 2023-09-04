import { Router } from "express";
import { getHabitatsController, getAnimalsController, getEmergenciesController, getServicesController, getStaffsController, getTacoShopController } from "../controllers/getData.js";
import { AnimalsByEntryYController, AnimalsDeathController, StaffAnimalsController, HabitatAnimalsController, getAnimalsNoVacunesController, DevolutionsController, LossMoneyController, BalanceDayController, SellsMonthController, StaffBySalaryController, StaffOlderController, TacoInOrderController, BestMonthController, EmergenciesByVetController, IncidentsByAnimalController, BetweenDatesController, notAllowed  } from "../controllers/getData.js";
import passportHelper  from "../helpers/passport.js";
import routesVersioning from "express-routes-versioning";

export const getInitRoute = () => {
    const app = Router();
    const version = routesVersioning();
    app.use(passportHelper.authenticate("bearer", {session: false}));
    app.get("/habitats", getHabitatsController);

    app.get("/animals", version({
        "^1.0.0": getAnimalsController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/emergencies", version({
        "^1.0.0": getEmergenciesController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/services", version({
        "^1.0.0": getServicesController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/staffs", version({
        "^1.0.0": getStaffsController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/tacoShop", version({
        "^1.0.0": getTacoShopController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    })),

    app.get("/animalsByEntryY", version({
        "^1.0.0": AnimalsByEntryYController,
        "2.0.1": notAllowed,
        "2.0.2": AnimalsByEntryYController,
        "2.0.3": notAllowed,
    }));

    app.get("/animalsDeath", version({
        "^1.0.0": AnimalsDeathController,
        "2.0.1": notAllowed,
        "2.0.2": AnimalsDeathController,
        "2.0.3": notAllowed,
    }))

    app.get("/staffAnimals", version({
        "^1.0.0": StaffAnimalsController,
        "2.0.1": notAllowed,
        "2.0.2": StaffAnimalsController,
        "2.0.3": notAllowed,
    }))

    app.get("/habitatAnimals", version({
        "^1.0.0": HabitatAnimalsController,
        "2.0.1": notAllowed,
        "2.0.2": HabitatAnimalsController,
        "2.0.3": notAllowed,
    }))

    app.get("/animalsNoVacunes", version({
        "^1.0.0": getAnimalsNoVacunesController,
        "2.0.1": notAllowed,
        "2.0.2": getAnimalsNoVacunesController,
        "2.0.3": notAllowed,
    }))

    app.get("/devolutions", version({
        "^1.0.0": DevolutionsController,
        "2.0.1": DevolutionsController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/lossMoney", version({
        "^1.0.0": LossMoneyController,
        "2.0.1": LossMoneyController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/balanceDay", version({
        "^1.0.0": BalanceDayController,
        "2.0.1": BalanceDayController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/sellsMonth", version({
        "^1.0.0": SellsMonthController,
        "2.0.1": SellsMonthController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/staffBySalary", version({
        "^1.0.0": StaffBySalaryController,
        "2.0.3": StaffBySalaryController,
        "2.0.2": notAllowed,
        "2.0.1": notAllowed,
    }))

    app.get("/staffOlder", version({
        "^1.0.0": StaffOlderController,
        "2.0.1": notAllowed,
        "2.0.2": notAllowed,
        "2.0.3": StaffOlderController,
    }))

    app.get("/tacoInOrder", version({
        "^1.0.0": TacoInOrderController,
        "2.0.1": TacoInOrderController,
        "2.0.2": notAllowed,
        "2.0.3": notAllowed,
    }))

    app.get("/bestMonth", version({
        "^1.0.0": BestMonthController,
        "2.0.1": BestMonthController,
        "2.0.2": notAllowed,
        "2.0.3": BestMonthController,
    }))

    app.get("/emergenciesByVet", version({
        "^1.0.0": EmergenciesByVetController,
        "2.0.1": notAllowed,
        "2.0.2": EmergenciesByVetController,
        "2.0.3": notAllowed,
    }))

    app.get("/incidentsByAnimal", version({
        "^1.0.0": IncidentsByAnimalController,
        "2.0.1": notAllowed,
        "2.0.2": IncidentsByAnimalController,
        "2.0.3": notAllowed,
    }))

    app.get("/betweenDates", version({
        "^1.0.0": BetweenDatesController,
        "2.0.1": notAllowed,
        "2.0.2": BetweenDatesController,
        "2.0.3": notAllowed,
    }))
    return app;
}