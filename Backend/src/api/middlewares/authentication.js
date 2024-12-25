import httpStatus from "http-status";
import { verifyToken } from "../../config/token.js";
import APIError from "../errors/api-error.js";

export const authenticateToken = async (req, res, next) => {
  const token = req.headers["authorization"] || "";
  try {
    const valid = verifyToken(token);
    console.log(valid);
    next();
  } catch (e) {
    const error = new APIError({
      message: e.message,
      status: httpStatus.UNAUTHORIZED,
      errors: e.errors,
    });
    next(error);
  }
};
