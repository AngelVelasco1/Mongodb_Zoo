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

// 1. obtener los animales ingresados en un año específico
export const getServiceAnimalsByEntryY = async(year)=>{
    const animal = new Animals();
    return await animal.getAnimalsByEntryY(year);
}

//2. traer todos los animales que han fallecido.
export const getServiceAnimalsDeath = async()=>{
    const animal = new Animals();
    return await animal.getAnimalsDeath();
}

// 3. obtener todos los animales bajo el cargo de un cuidador en específico. (el id es el id del cuidador)
export const getServiceStaffAnimals = async(id)=>{
    const staff = new Staff();
    return await staff.getStaffAnimals(id);
};

// 4. obtener los animales que están actualmente viviendo en un habitat en específico. (el id de entrada es el id del habitat)
export const getServiceHabitatAnimals= async(id)=>{
    const habitat = new Habitat();
    return await habitat.getHabitatAnimals(id);
};

//5. Traer todos los animales que no tienen vacunas.(si el animal ya murió simplemente no lo muestra)
export const getServiceAnimalsNoVcunes = async()=>{
    const animal = new Animals();
    return await animal.getAnimalsNoVacunes();
}

// 6. Traer todos las registros de servicio que tuvieron un rembolso y la razón
export const getServiceDevolutions = async()=>{
    const service = new Services();
    return await service.getDevolutions();
};

// 7. Calcular cuanto dinero en total en un mes específico se “perdió” en los refounds amount*price - refund. (el parámetro month debe ser un numero entero de 1 a 12)
export const getServiceLossMoney = async(month)=>{
    const service = new Services();
    return await service.getLossMoney(month);
};

// 8. Calcular el total de ingresos de un día específico por taquillería.
export const getServiceBalanceDay = async(date)=>{
    const taco = new tacoShop();
    return await taco.getTacoBalanceDaily(date);
};

// 9. Calcular el total de ingresos en un mes específico en taquillería y servicios.
export const getServiceSellsMonth = async(month)=>{
    const service = new Services();
    const taco = new tacoShop() 
    const result1 =  await service.getSellsMonth(month);
    const result2 = await taco.getTacoSellsMonth(month);
    return {result1, result2}
};

// 10. Mirar cual el empleado con más ventas. con info del empleado y sus ventas.

export const getServiceStaffBestSeller = async()=>{
    const staff = new Staff();
    return await staff.getStaffBestSeller();
};
// 11. obtener los empleados por salario.
export const getServiceStaffBySalary = async(salary)=>{
    const staff = new Staff();
    return await staff.getStaffBySalary(salary);
};

// 12. Traer el empleado con mayor antiguedad que sigua trabajando.
export const getServiceStaffOlder= async()=>{
    const staff = new Staff();
    return await staff.getOldestEmploy();
};

// 13. ordenar por tipo de ticket y la cantidad total.
export const getServiceTacoInOrder = async()=>{
    const taco = new tacoShop();
    return await taco.getTacoInOrder();
};
// 14. Identificar cual fue el mes en que mas se vendieron cosas.
export const getServiceBestMonth = async()=>{
    const service = new Services();
    return await service.getBestMonth();
};
// 15. traer todas los registros de emergencias que ha atendido un veterinario en específico
export const getServiceEmergenciesByVet = async(id_vet)=>{
    const emergencie = new Emergencies();
    return await emergencie.getEmergenciesByVet(id_vet);
};
// 16. traer todos los incidentes que ha tenido un animal en su historia.
export const getServiceIncidentsByAnimal= async(id)=>{
    const animal = new Animals();
    return await animal.getIncidentsByAnimal(id);
}
// 17. traer todas las emergencias ocurridas en un determinado plazo de fechas .
export const getServiceEmergenciesBetweenDates= async(start, end)=>{
    const emergencie = new Emergencies();
    return await emergencie.getEmergenciesBetweenDates(start, end);
} 