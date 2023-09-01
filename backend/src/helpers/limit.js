import rateLimit from "express-rate-limit";

export const limitPet = ()=>{
    return rateLimit({
        windowMs: 30*1000,
        max: 7,
        standarHeaders: true,
        legacyHeaders: false,
        skip: (req, res)=>{
            if(req.headers["content-length"]>600){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de lo que se envía es demasiado grande."
                });
                return true;
            }
        },
        message: (req, res)=>{
            res.status(417).send({
                status: 417,
                message: "Haz superado el límite de peticiones, intentalo más tarde"
            });
        }
    })
}