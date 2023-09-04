import { Habitat } from "../collections/Habitats.js";
import { Animals } from "../collections/Animals.js";
import { Emergencies } from "../collections/emergencies.js";
import { Services } from "../collections/Services.js";
import { Staff } from "../collections/staff.js";
import { tacoShop } from "../collections/taco_shop.js";

export const getServiceHabitat = async(id)=>{
    const habitat = new Habitat();
    return await habitat.getHabitat(id);
};
export const getServiceAnimals = async(id)=>{
    const animal = new Animals();
    return await animal.getAnimals(id);
};
export const getServiceEmergencies = async(id)=>{
    const emergencie = new Emergencies();
    return await emergencie.getEmergencies(id);
};
export const getServiceServices = async(id)=>{
    const service = new Services();
    return await service.getServices(id);
};
export const getServiceStaff = async(id)=>{
    const staff = new Staff();
    return await staff.getStaff(id);
};
export const getServiceTacoShop = async(id)=>{
    const taco = new tacoShop();
    return await taco.getTacoShop(id);
};
