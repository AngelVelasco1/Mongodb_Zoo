import { postServiceHabitat, postServiceAnimals, postServiceEmergencies, postServiceServices, postServiceStaff, postServiceTacoShop } from "../services/post.js";

export const postHabitatController = async (req, res) => {
    try {
        const habitats = await postServiceHabitat(req.body);
        res.status(200).json(habitats);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postAnimalsController = async (req, res) => {
    try {
        const animals = await postServiceAnimals(req.body);
        res.status(200).json(animals);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postEmergenciesController = async (req, res) => {
    try {
        const emergencies = await postServiceEmergencies(req.body);
        res.status(200).json(emergencies);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postServicesController = async (req, res) => {
    try {
        const services = await postServiceServices(req.body);
        res.status(200).json(services);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postStaffsController = async (req, res) => {
    try {
        const staffs = await postServiceStaff(req.body);
        res.status(200).json(staffs);
    } catch(err) {
        res.status(500).send(err)
    }
}

export const postTacoShopController = async (req, res) => {
    try {
        const tacoShop = await postServiceTacoShop(req.body);
        res.status(200).json(tacoShop);
    } catch(err) {
        res.status(500).send(err)
    }
}