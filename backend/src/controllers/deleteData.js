import {deleteServiceHabitat, deleteServiceAnimals, deleteServiceEmergencies, deleteServiceServices, deleteServiceStaff, deleteServiceTacoShop} from "../services/delete.js"

export const deleteHabitatController = async (req, res) => {
    try {
        const { id } = req.query;
        const habitat = await deleteServiceHabitat(id);
        res.status(201).json({"Habitat deleted": habitat});
    } catch(err) {
        res.status(500).send(err)
    }
}

export const deleteAnimalsController = async (req, res) => {
    try {
        const { id } = req.query;
        const animals = await deleteServiceAnimals(id);
        res.status(201).json({"Animal deleted": animals});
    } catch(err) {
        res.status(500).send(err)
    }
}

export const deleteEmergenciesController = async (req, res) => {
    try {
        const { id } = req.query;
        const emergencies = await deleteServiceEmergencies(id);
        res.status(201).json({"Emergencie deleted": emergencies});
    } catch(err) {
        res.status(500).send(err)
    }
}

export const deleteServicesController = async (req, res) => {
    try {
        const { id } = req.query;
        const services = await deleteServiceServices(id);
        res.status(201).json({"Service deleted": services});
    } catch(err) {
        res.status(500).send(err)
    }
}

export const deleteStaffsController = async (req, res) => {
    try {
        const { id } = req.query;
        const staffs = await deleteServiceStaff(id);
        res.status(201).json({"Staff deleted": staffs});
    } catch(err) {
        res.status(500).send(err)
    }
}

export const deleteTacoShopController = async (req, res) => {
    try {
        const { id } = req.query;
        const tacoShop = await deleteServiceTacoShop(id);
        res.status(201).json({"Taco Shop deleted": tacoShop});
    } catch(err) {
        res.status(500).send(err)
    }
}