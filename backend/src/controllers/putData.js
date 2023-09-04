import { putServiceHabitat, putServiceAnimals, putServiceEmergencies, putServiceServices, putServiceStaff, putServiceTacoShop } from "../services/put.js";

export const putHabitatController = async (req, res) => {
    try {
        const { id } = req.query;
        const habitats = await putServiceHabitat(req.body, id)
        res.status(201).json(habitats);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putAnimalsController = async (req, res) => {
    try {
        const { id } = req.query;
        const animals = await putServiceAnimals(req.body, id)
        res.status(201).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putEmergenciesController = async (req, res) => {
    try {
        const { id } = req.query;
        const emergencies = await putServiceEmergencies(req.body, id)
        res.status(201).json(emergencies);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putServicesController = async (req, res) => {
    try {
        const { id } = req.query;
        const services = await putServiceServices(req.body, id)
        res.status(201).json(services);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putStaffsController = async (req, res) => {
    try {
        const { id } = req.query;
        const staffs = await putServiceStaff(req.body, id)
        res.status(201).json(staffs);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putTacoShopController = async (req, res) => {
    try {
        const { id } = req.query;
        const tacoShop = await putServiceTacoShop(req.body, id)
        res.status(201).json(tacoShop);
    } catch(err) {
        res.status(500).send(err)
    }
}