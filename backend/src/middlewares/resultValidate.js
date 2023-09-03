import { validationResult } from "express-validator";

export const animalsPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const keys = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of keys) {
        if (data[key] === undefined) delete data[key]
    }
    
    req.body = data;
    next();
}

export const servicesPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const keys = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of keys) {
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}

export const habitatsPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const keys = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of keys) {   
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}

export const staffPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const keys = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of keys) {
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}

export const taco_shopPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const keys = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of keys) {    
        if (data[key] === undefined) delete data[key]
    }

    req.body = data
    next();
}

export const emergenciesPostValidate = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});

    const keys = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of keys) {
        if (data[key] === undefined) delete data[key]
    }

    req.body = data;
    next();
}