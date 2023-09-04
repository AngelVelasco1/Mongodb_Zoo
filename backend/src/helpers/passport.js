import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { verifyToken } from "../token/auth.js";

passport.use(new BearerStrategy(
    { passReqToCallback: true },
    async function(req, token, done) {
        console.log("here");
        const usuario = await verifyToken(req, token);
        if(!usuario) return done(null, false);
        return done(null, usuario);
    }
));

export default passport;