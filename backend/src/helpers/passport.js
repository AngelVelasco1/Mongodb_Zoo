import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";

/* queda pendiente el nombre de la función de validar el token */
import { validarToken } from "../token/auth.js";

passport.use(new BearerStrategy(
    { passReqToCallback: true },
    async function(req, token, done) {
        const usuario = await validarToken(req, token);
        if(!usuario) return done(null, false);
        return done(null, usuario);
    }
));

export default passport;