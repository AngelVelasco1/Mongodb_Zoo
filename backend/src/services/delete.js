import { Habitat } from "../collections/Habitats.js";
import { Animals } from "../collections/Animals.js";
import { Emergencies } from "../collections/emergencies.js";
import { Services } from "../collections/Services.js";
import { Staff } from "../collections/staff.js";
import { tacoShop } from "../collections/taco_shop.js";

export const deleteServiceHabitat = async(id)=>{
    const habitat = new Habitat();
    return await habitat.deleteHabitat(id);
};
export const deleteServiceAnimals = async(id)=>{
    const animal = new Animals();
    return await animal.deleteAnimals(id);
};
export const deleteServiceEmergencies = async(id)=>{
    const emergencie = new Emergencies();
    return await emergencie.deleteEmergencies(id);
};
export const deleteServiceServices = async(id)=>{
    const service = new Services();
    return await service.deleteServices(id);
};
export const deleteServiceStaff = async(id)=>{
    const staff = new Staff();
    return await staff.deleteStaff(id);
};
export const deleteServiceTacoShop = async(id)=>{
    const taco = new tacoShop();
    return await taco.deleteTacoShop(id);
};
