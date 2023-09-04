import { Habitat } from "../collections/Habitats.js";
import { Animals } from "../collections/Animals.js";
import { Emergencies } from "../collections/emergencies.js";
import { Services } from "../collections/Services.js";
import { Staff } from "../collections/staff.js";
import { tacoShop } from "../collections/taco_shop.js";

export const postServiceHabitat = async(data)=>{
    const habitat = new Habitat();
    return await habitat.postHabitat(data);
};
export const postServiceAnimals = async(data)=>{
    const animal = new Animals();
    return await animal.postAnimals(data);
};
export const postServiceEmergencies = async(data)=>{
    const emergencie = new Emergencies();
    return await emergencie.postEmergencies(data);
};
export const postServiceServices = async(data)=>{
    const service = new Services();
    return await service.postServices(data);
};
export const postServiceStaff = async(data)=>{
    const staff = new Staff();
    return await staff.postStaff(data);
};
export const postServiceTacoShop = async(data)=>{
    const taco = new tacoShop();
    return await taco.postTacoShop(data);
};
