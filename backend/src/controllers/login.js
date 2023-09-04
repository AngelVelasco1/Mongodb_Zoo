export const login = (req, res, next) => {
    if(!req.rateLimit) return; 
    res.status(req.data.status).send(req.data);
}