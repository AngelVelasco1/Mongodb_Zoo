import { postServiceHabitat, postServiceAnimals, postServiceEmergencies, postServiceServices, postServiceStaff, postServiceTacoShop } from "../services/post.js";

export const postHabitatController = async (req, res) => {
    try {
        const data = req.body;
        const habitats = await postServiceHabitat(data);
        res.status(200).json(habitats);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postAnimalsController = async (req, res) => {
    try {
        const data = req.body;
        const animals = await postServiceAnimals(data);
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postEmergenciesController = async (req, res) => {
    try {
        const data = req.body;
        const emergencies = await postServiceEmergencies(data);
        res.status(200).json(emergencies);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postServicesController = async (req, res) => {
    try {
        const data = req.body;
        const services = await postServiceServices(data);
        res.status(200).json(services);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postStaffsController = async (req, res) => {
    try {
        const data = req.body;
        const staffs = await postServiceStaff(data);
        res.status(200).json(staffs);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postTacoShopController = async (req, res) => {
    try {
        const data = req.body;
        const tacoShop = await postServiceTacoShop(data);
        res.status(200).json(tacoShop);
    } catch(err) {
        res.status(500).send(err)
    }
}