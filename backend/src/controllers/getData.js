import { getServiceHabitat, getServiceAnimals, getServiceEmergencies, getServiceServices, getServiceStaff, getServiceTacoShop  } from "../services/get.js";
import { getServiceAnimalsByEntryY, getServiceAnimalsDeath, getServiceStaffAnimals, getServiceHabitatAnimals, getServiceAnimalsNoVcunes } from "../services/get.js";
import { getServiceDevolutions, getServiceLossMoney, getServiceBalanceDay, getServiceSellsMonth } from "../services/get.js";
import {  getServiceStaffBySalary, getServiceStaffOlder, getServiceTacoInOrder, getServiceBestMonth, getServiceEmergenciesByVet, getServiceIncidentsByAnimal, getServiceEmergenciesBetweenDates } from "../services/get.js"; 
export const getHabitatsController = async (req, res) => {
    try {
        const {id} = req.query;
        const habitats = await getServiceHabitat(id);
        res.status(200).json(habitats);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getAnimalsController = async (req, res) => {
    try {
        const {id} = req.query;
        const animals = await getServiceAnimals(id);
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getEmergenciesController = async (req, res) => {
    try {
        const {id} = req.query;
        const emergencies = await getServiceEmergencies(id);
        res.status(200).json(emergencies);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getServicesController = async (req, res) => {
    try {
        const {id} = req.query;
        const services = await getServiceServices(id);
        res.status(200).json(services);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getStaffsController = async (req, res) => {
    try {
        const {id} = req.query;
        const staffs = await getServiceStaff(id);
        res.status(200).json(staffs);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getTacoShopController = async (req, res) => {
    try {
        const {id} = req.query;
        const tacoShop = await getServiceTacoShop(id);
        res.status(200).json(tacoShop);
    } catch(err) {
        res.status(500).send(err)
    }
}



export const AnimalsByEntryYController = async (req, res) => {
    try {
        const {year} = req.query;
        const animals = await getServiceAnimalsByEntryY(year);
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const AnimalsDeathController = async (req, res) => {
    try {
        const animals = await getServiceAnimalsDeath();
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const StaffAnimalsController = async (req, res) => {
    try {
        const {id} = req.query;
        const staff = await getServiceStaffAnimals(id);
        res.status(200).json(staff);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const HabitatAnimalsController = async (req, res) => {
    try {
        const {id} = req.query;
        const habitat = await getServiceHabitatAnimals(id);
        res.status(200).json(habitat);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getAnimalsNoVacunesController = async (req, res) => {
    try {
        const animals = await getServiceAnimalsNoVcunes();
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const DevolutionsController = async (req, res) => {
    try {
        const devolutions = await getServiceDevolutions();
        res.status(200).json(devolutions);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const LossMoneyController = async (req, res) => {
    try {
        const {month} = req.query;
        const lossMoney = await getServiceLossMoney(month);
        res.status(200).json(lossMoney);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const BalanceDayController = async (req, res) => {
    try {
        const {date} = req.query;
        const balanceDay = await getServiceBalanceDay(date);
        res.status(200).json(balanceDay);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const SellsMonthController = async (req, res) => {
    try {
        const {month} = req.query;
        const sellsMonth = await getServiceSellsMonth(month);
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const StaffBySalaryController = async (req, res) => {
    try {
        const {salary} = req.query;
        const sellsMonth = await getServiceStaffBySalary(salary);
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}

export  const StaffOlderController = async (req, res) => {
    try {
        const sellsMonth = await getServiceStaffOlder();
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const TacoInOrderController = async (req, res) => {
    try {
        const sellsMonth = await getServiceTacoInOrder();
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
} 

export const BestMonthController = async (req, res) => {
    try {
        const sellsMonth = await getServiceBestMonth();
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const EmergenciesByVetController = async (req, res) => {
    try {
        const {id_vet} = req.query;
        const sellsMonth = await getServiceEmergenciesByVet(id_vet);
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const IncidentsByAnimalController = async (req, res) => {
    try {
        const {id} = req.query;
        const sellsMonth = await getServiceIncidentsByAnimal(id);
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const BetweenDatesController = async (req, res) => {
    try {
        const {start, end} = req.query;
        const sellsMonth = await getServiceEmergenciesBetweenDates(start, end);
        res.status(200).json(sellsMonth);
    } catch(err) {
        res.status(500).send(err)
    }
}



export const notAllowed = (req, res) => {
    res.status(405).send({message: "Method not allowed in this version"});
}