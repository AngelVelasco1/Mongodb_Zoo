import { getServiceHabitat, getServiceAnimals, getServiceEmergencies, getServiceServices, getServiceStaff, getServiceTacoShop  } from "../services/get.js";

export const getHabitatsController = async (req, res) => {
    try {
        const habitats = await getServiceHabitat();
        res.status(200).json(habitats);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getAnimalsController = async (req, res) => {
    try {
        const animals = await getServiceAnimals();
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getEmergenciesController = async (req, res) => {
    try {
        const emergencies = await getServiceEmergencies();
        res.status(200).json(emergencies);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getServicesController = async (req, res) => {
    try {
        const services = await getServiceServices();
        res.status(200).json(services);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getStaffsController = async (req, res) => {
    try {
        const staffs = await getServiceStaff();
        res.status(200).json(staffs);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const getTacoShopController = async (req, res) => {
    try {
        const tacoShop = await getServiceTacoShop();
        res.status(200).json(tacoShop);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const notAllowed = (req, res) => {
    res.status(405).send({message: "Method not allowed in this version"});
}