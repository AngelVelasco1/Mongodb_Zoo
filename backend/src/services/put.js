import { Habitat } from "../collections/Habitats.js";
import { Animals } from "../collections/Animals.js";
import { Emergencies } from "../collections/emergencies.js";
import { Services } from "../collections/Services.js";
import { Staff } from "../collections/staff.js";
import { tacoShop } from "../collections/taco_shop.js";

export const putServiceHabitat = async(id, data)=>{
    const habitat = new Habitat();
    return await habitat.updateHabitat(id, data);
};
export const putServiceAnimals = async(id, data)=>{
    const animal = new Animals();
    return await animal.updateAnimals(id, data);
};
export const putServiceEmergencies = async(id, data)=>{
    const emergencie = new Emergencies();
    return await emergencie.updateEmergencies(id, data);
};
export const putServiceServices = async(id, data)=>{
    const service = new Services();
    return await service.updateEmergencies(id, data);
};
export const putServiceStaff = async(id, data)=>{
    const staff = new Staff();
    return await staff.updateStaff(id, data);
};
export const putServiceTacoShop = async(id, data)=>{
    const taco = new tacoShop();
    return await taco.updateTacoShop(id, data);
};
