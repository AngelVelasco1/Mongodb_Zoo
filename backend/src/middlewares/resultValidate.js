import { validationResult } from "express-validator";

export const animalsPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    let { staffId, name, age, location, descendents, origin, vacunes, entryDate } = req.body;
    let data =  { "id_staff": staffId,
    "animal_name": name,
    "species": species,
    "aprox_age": age,
    "location": location,
    "descendents": descendents,
    "origin": origin,
    "vacunes": vacunes,
    "entry_date": entryDate
}


    for (const key in data) {
        if (data[key] === undefined) delete data[key]
    }
    
    req.body = data;
    next();
}

export const servicesPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    let { name, productName, staffId, date, quantity, price, devolutions, reason, refund } = req.body;
    let data =  { "shop": name,
    "product_name": productName,
    "id_staff": staffId,
    "date": date,
    "amount": quantity,
    "price": price,
    "devolutions": devolutions,
    "reason": reason,
    "refund": refund
    }

    console.log(data);
    for (const key in data) {
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}

export const habitatsPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    let { name, description, weather, residents, personnel, upcomingMaintenance } = req.body;
    let data =  { 
    "name": name,
    "description": description,
    "weather": weather,
    "residents": residents,
    "assigned_personnel": personnel,
    "next_maintenance": upcomingMaintenance,
    }
    for (const key in data) {   
        if (data[key] === undefined) delete data[key]
    }
    req.body = data;
    next();
}

export const staffPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    let { name, startContract, endContract,emergency_contact, salary, eps, phoneNumber, contactName, relationship, contactNumber } = req.body;
    let data =  { 
    "full_name": name,
    "start_contract": startContract,
    "end_contract": endContract,
    "salary": salary,
    "eps": eps,
    "phone_number": phoneNumber,
    "emergency_contact": emergency_contact,
    "emergency_contact.contact_name": contactName,
    "emergency_contact.relationship": relationship,
    "emergency_contact.contact_number": contactNumber
    }
    for (const key in data) {   
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}

export const taco_shopPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    let { amount, date, seller, ticketType, ticketPrice } = req.body;
    let data =  {
    "amount": amount,
    "date": date,
    "seller": seller,
    "ticket_type": ticketType,
    "ticket_price": ticketPrice
    }
    for (const key in data) {   
        if (data[key] === undefined) delete data[key]
    }

    req.body = data
    next();
}

export const emergenciesPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    let { animalId, vetId, description, date, emergencyType } = req.body;
    let data =  {
    "id_animal": animalId,
    "id_vet": vetId,
    "description": description,
    "date": date,
    "emergency_type": emergencyType,
    }
    for (const key in data) {   
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}