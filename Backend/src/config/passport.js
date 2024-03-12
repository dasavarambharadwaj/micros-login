import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { jwtSecret } from "./vars.js";

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
};

// Need to implement
const findById = async (sub) => {
  return true;
};
const verify = async (payload, done) => {
  try {
    const user = await findById(payload.sub);
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export const jwt = new JwtStrategy(jwtOptions, verify);
