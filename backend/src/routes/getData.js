import { Router } from "express";
import { getHabitatsController, getAnimalsController, getEmergenciesController, getServicesController, getStaffsController, getTacoShopController } from "../controllers/getData.js";
import { AnimalsByEntryYController, AnimalsDeathController, StaffAnimalsController, HabitatAnimalsController, getAnimalsNoVacunesController, DevolutionsController, LossMoneyController, BalanceDayController, SellsMonthController, StaffBySalaryController, StaffOlderController, TacoInOrderController, BestMonthController, EmergenciesByVetController, IncidentsByAnimalController, BetweenDatesController  } from "../controllers/getData.js";
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
    })),

    app.get("/animalsByEntryY", version({
        "^1.0.0": AnimalsByEntryYController,
        "^2.0.0": AnimalsByEntryYController,
    }));

    app.get("/animalsDeath", version({
        "^1.0.0": AnimalsDeathController,
        "^2.0.0": AnimalsDeathController,
    }))

    app.get("/staffAnimals", version({
        "^1.0.0": StaffAnimalsController,
        "^2.0.0": StaffAnimalsController,
    }))

    app.get("/habitatAnimals", version({
        "^1.0.0": HabitatAnimalsController,
        "^2.0.0": HabitatAnimalsController,
    }))

    app.get("/animalsNoVacunes", version({
        "^1.0.0": getAnimalsNoVacunesController,
        "^2.0.0": getAnimalsNoVacunesController,
    }))

    app.get("/devolutions", version({
        "^1.0.0": DevolutionsController,
        "^2.0.0": DevolutionsController,
    }))

    app.get("/lossMoney", version({
        "^1.0.0": LossMoneyController,
        "^2.0.0": LossMoneyController,
    }))

    app.get("/balanceDay", version({
        "^1.0.0": BalanceDayController,
        "^2.0.0": BalanceDayController,
    }))

    app.get("/sellsMonth", version({
        "^1.0.0": SellsMonthController,
        "^2.0.0": SellsMonthController,
    }))

    app.get("/staffBySalary", version({
        "^1.0.0": StaffBySalaryController,
        "^2.0.0": StaffBySalaryController,
    }))

    app.get("/staffOlder", version({
        "^1.0.0": StaffOlderController,
        "^2.0.0": StaffOlderController,
    }))

    app.get("/tacoInOrder", version({
        "^1.0.0": TacoInOrderController,
        "^2.0.0": TacoInOrderController,
    }))

    app.get("/bestMonth", version({
        "^1.0.0": BestMonthController,
        "^2.0.0": BestMonthController,
    }))

    app.get("/emergenciesByVet", version({
        "^1.0.0": EmergenciesByVetController,
        "^2.0.0": EmergenciesByVetController,
    }))

    app.get("/incidentsByAnimal", version({
        "^1.0.0": IncidentsByAnimalController,
        "^2.0.0": IncidentsByAnimalController,
    }))

    app.get("/betweenDates", version({
        "^1.0.0": BetweenDatesController,
        "^2.0.0": BetweenDatesController,
    }))

    
    
}