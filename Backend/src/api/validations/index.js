import APIError from "../errors/api-error.js";
import { ERROR_400 } from "../../constants/error-messages.js";

export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    const error = new APIError({
      message: ERROR_400,
      status: 400,
      errors: err.errors,
    });
    next(error);
  }
};
