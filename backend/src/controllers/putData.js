import { putServiceHabitat, putServiceAnimals, putServiceEmergencies, putServiceServices, putServiceStaff, putServiceTacoShop } from "../services/put.js";

export const putHabitatController = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const habitats = await putServiceHabitat(id, data)
        res.status(201).json(habitats);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putAnimalsController = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const animals = await putServiceAnimals(id, data)
        res.status(201).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putEmergenciesController = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const emergencies = await putServiceEmergencies(id, data)
        res.status(201).json(emergencies);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putServicesController = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const services = await putServiceServices(id, data)
        res.status(201).json(services);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putStaffsController = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const staffs = await putServiceStaff(id, data)
        res.status(201).json(staffs);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const putTacoShopController = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const tacoShop = await putServiceTacoShop(id, data)
        res.status(201).json(tacoShop);
    } catch(err) {
        res.status(500).send(err)
    }
}