import { check } from 'express-validator'

const animal = {
    id_staff: "staffId",
    animal_name: "name",
    species: "species",
    aprox_age: "age",
    location: "location",
    descendents: "descendents",
    origin: "origin",
    vacune: "vacunes",
    entry_date: "entryDate",
    death_date: "deathDate",
    reason: "reason"
};
export const animalsDtoV1 = [
    check(`${animal.id_staff}`)
        .notEmpty().withMessage(`${animal.id_staff} is required`)
        .isNumeric().withMessage(`${animal.id_staff} should be an number of an staff member`),

    check(`${animal.animal_name}`)
        .notEmpty().withMessage(`${animal.animal_name} is required`)
        .isString().withMessage(`${animal.animal_name} should be a string`),

    check(`${animal.species}`)
        .notEmpty().withMessage(`${animal.species} is required`)
        .isString().withMessage(`${animal.species} should be a string`),

    check(`${animal.aprox_age}`)
        .notEmpty().withMessage(`${animal.aprox_age} is required`)
        .isInt().withMessage(`${animal.aprox_age} should be an interger`),

    check(`${animal.location}`)
        .notEmpty().withMessage(`${animal.location} is required`)
        .isString().withMessage(`${animal.location} should be a string`),

    check(`${animal.descendents}`)
        .notEmpty().withMessage(`${animal.descendents} is required`)
        .isArray().withMessage(`${animal.descendents} should be an array`),

    check(`${animal.origin}`)
        .notEmpty().withMessage(`${animal.origin} is required`)
        .isString().withMessage(`${animal.origin} should be a string`),

    check(`${animal.vacune}`)
        .notEmpty().withMessage(`${animal.vacune} is required`)
        .isInt().withMessage(`${animal.vacune} should be an interger`),


    check(`${animal.entry_date}`)
        .isDate().optional().withMessage(`${animal.entry_date} should be a date`),

    check(`${animal.death_date}`)
        .isDate().optional().withMessage(`${animal.death_date} should be a date`),

    check(`${animal.reason}`)
        .notEmpty().withMessage(`${animal.reason} is required`)
        .isString().withMessage(`${animal.reason} should be a string`)
        
]

const services = {
    shop: "name",
    product_name: "productName",
    id_staff: "staffId",
    date: "date",
    amount: "quantity",
    price: "price",
    devolutions: "devolutions",
    reason: "reason",
    refund: "refund",
};
export const servicesDtoV1 = [
    check(`${services.shop}`)
        .notEmpty().withMessage(`${services.shop} is required`)
        .isString().withMessage(`${services.shop} should be a string`),

    check(`${services.product_name}`)
        .notEmpty().withMessage(`${services.product_name} is required`)
        .isString().withMessage(`${services.product_name} should be a string`),

    check(`${services.id_staff}`)
        .notEmpty().withMessage(`${services.id_staff} is required`)
        .isNumeric().withMessage(`${services.id_staff} should be an number of an staff member`),

    check(`${services.date}`)
        .notEmpty().withMessage(`${services.date} is required`)
        .isString().withMessage(`${services.date} should be a string`),

    check(`${services.amount}`)
        .notEmpty().withMessage(`${services.amount} is required`)
        .isInt().withMessage(`${services.amount} should be an interger`),

    check(`${services.price}`)
        .notEmpty().withMessage(`${services.price} is required`)
        .isInt().withMessage(`${services.price} should be an interger`),


    check(`${services.devolutions}`)
        .isInt().optional().withMessage(`${services.devolutions} should be am interger`),

    check(`${services.reason}`)
        .optional()
        .isString().withMessage(`${services.reason} should be a string`),

    check(`${services.refund}`)
        .isInt().optional().withMessage(`${services.refund} should be an interger`),


]

const habitat = {
    name: "name",
    description: "description",
    weather: "weather",
    residents: "residents",
    assigned_personnel: "personnel",
    next_maintenance: "upcomingMaintenance",
};
export const habitatsDtoV1 = [
    check(`${habitat.name}`)
        .notEmpty().withMessage(`${habitat.name} is required`)
        .isString().withMessage(`${habitat.name} should be a string`),

    check(`${habitat.description}`)
        .notEmpty().withMessage(`${habitat.description} is required`)
        .isString().withMessage(`${habitat.description} should be a string`),

    check(`${habitat.weather}`)
        .notEmpty().withMessage(`${habitat.weather} is required`)
        .isString().withMessage(`${habitat.weather} should be a string`),

    check(`${habitat.residents}`)
        .notEmpty().withMessage(`${habitat.residents} is required`)
        .isArray().withMessage(`${habitat.residents} should be an array`),

    check(`${habitat.assigned_personnel}`)
        .notEmpty().withMessage(`${habitat.assigned_personnel} is required`)
        .isNumeric().withMessage(`${habitat.assigned_personnel} should be an id number`),

    check(`${habitat.next_maintenance}`)
        .notEmpty().withMessage(`${habitat.next_maintenance} is required`)
        .isString().withMessage(`${habitat.next_maintenance} should be a string`),

]

const staff = {
    full_name: "name",
    start_contract: "startContract",
    end_contract: "endContract",
    salary: "salary",
    eps: "eps",
    phone_number: "phoneNumber",
    emergency_contact: {
        contact_name: "contactName",
        relationship: "relationship",
        contact_number: "contactNumber"
    }
};
export const staffsDtoV1 = [
    check(`${staff.full_name}`)
        .notEmpty().withMessage(`${staff.full_name} is required`)
        .isString().withMessage(`${staff.full_name} should be a string`),

    check(`${staff.start_contract}`)
        .notEmpty().withMessage(`${staff.start_contract} is required`)
        .isString().withMessage(`${staff.start_contract} should be a string`),
        
    check(`${staff.end_contract}`)
        .optional()
        .isString().withMessage(`${staff.end_contract} should be a string`),

    check(`${staff.salary}`)
        .notEmpty().withMessage(`${services.salary} is required`)
        .isInt().withMessage(`${services.salary} should be an interger`),


    check(`${staff.eps}`)
        .notEmpty().withMessage(`${staff.eps} is required`)
        .isString().withMessage(`${staff.eps} should be a string`),

    check(`${staff.phone_number}`)
        .notEmpty().withMessage(`${staff.phone_number} is required`)
        .isInt().withMessage(`${staff.phone_number} should be an interger`),

/*     check(`${staff.emergency_contact}`)
        .notEmpty().withMessage(`${staff.emergency_contact} is required`),
        
 */
    
]

const taco_shop = {
    amount: "amount",
    date: "date",
    seller: "seller",
    ticket_type: "ticketType",
    ticket_price: "ticketPrice",
};
export const taco_shopDtoV1 = [
    check(`${taco_shop.amount}`)
        .notEmpty().withMessage(`${services.amount} is required`)
        .isInt().withMessage(`${services.amount} should be an interger`),

    check(`${taco_shop.date}`)
        .notEmpty().withMessage(`${taco_shop.date} is required`)
        .isString().withMessage(`${taco_shop.date} should be a string`),

    check(`${taco_shop.seller}`)
        .notEmpty().withMessage(`${services.seller} is required`)
        .isString().withMessage(`${taco_shop.seller} should be a string`),

    check(`${taco_shop.ticket_type}`)
        .notEmpty().withMessage(`${taco_shop.ticket_type} is required`)
        .isString().withMessage(`${taco_shop.ticket_type} should be a string`),
    check(`${taco_shop.ticket_price}`)
        .notEmpty().withMessage(`${taco_shop.ticket_price} is required`)
        .isInt({ min: 1, max: 10 }).withMessage(`${taco_shop.ticket_price} should be an interger between 1 and 10`),
]

const emergencies = {
    id_animal: "animalId",
    id_vet: "vetId",
    description: "description",
    date: "date",
    emergency_type: "emergencyType",
};
export const emergenciesDtoV1 = [
    check(`${emergencies.id_animal}`)
        .notEmpty().withMessage(`${services.id_animal} is required`)
        .isInt().withMessage(`${services.id_animal} should be an interger`),

    check(`${emergencies.id_vet}`)
        .notEmpty().withMessage(`${services.id_vet} is required`)
        .isInt().withMessage(`${services.id_vet} should be an interger`),

    check(`${emergencies.description}`)
        .notEmpty().withMessage(`${services.description} is required`)
        .isString().withMessage(`${emergencies.description} should be a string`),

    check(`${emergencies.date}`)
        .notEmpty().withMessage(`${emergencies.date} is required`)
        .isString().withMessage(`${emergencies.date} should be a string`),

    check(`${emergencies.emergency_type}`)
        .notEmpty().withMessage(`${emergencies.emergency_type} is required`)
        .isString().withMessage(`${emergencies.emergency_type} should be a string`)
]