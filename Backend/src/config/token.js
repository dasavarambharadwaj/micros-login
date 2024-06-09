import jwt from "jsonwebtoken";
import { jwtSecret } from "./vars.js";
export const getToken = function (payload) {
  return jwt.sign(payload, jwtSecret, {
    expiresIn: "1d",
  });
};
export const verifyToken = function (token) {
  return jwt.verify(token, jwtSecret);
};
