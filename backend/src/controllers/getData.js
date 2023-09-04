import { getServiceHabitat, getServiceAnimals, getServiceEmergencies, getServiceServices, getServiceStaff, getServiceTacoShop  } from "../services/get.js";

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

export const notAllowed = (req, res) => {
    res.status(405).send({message: "Method not allowed in this version"});
}