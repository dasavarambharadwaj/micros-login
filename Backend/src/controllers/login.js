import APIError from "../api/errors/api-error.js";
import { runQuery } from "../config/mysql.js";
import { parseCheckUserData, parseCreateUser } from "../parsers/login.js";
import { getToken, verifyToken } from "../config/token.js";

export const checkUser = async function (req, res, next) {
  try {
    const data = await runQuery("CALL GetUserDetailsByEmailAndPassword(?,?);", [
      req.body.email,
      req.body.password,
    ]);
    const parsedData = parseCheckUserData(data);
    const response = {
      token: getToken(parsedData),
    };
    res.send(response);
  } catch (e) {
    if ((e.message = "Invalid username or password")) {
      const error = new APIError({
        message: e.message,
        status: 401,
        errors: e.errors,
      });
      next(error);
    } else {
      next(e);
    }
  }
};

export const addUser = async function (req, res, next) {
  try {
    const data = await runQuery("CALL addUser(?,?,?);", [
      req.body.email,
      req.body.username,
      req.body.password,
    ]);
    const parsedData = parseCreateUser(data);

    res.send(parsedData);
  } catch (e) {
    if ((e.message = "Email already exists")) {
      const error = new APIError({
        message: e.message,
        status: 409,
        errors: e.errors,
      });
      next(error);
    } else {
      next(e);
    }
  }
};

export const validateToken = async function (req, res, next) {
  try {
    const data = verifyToken(req?.body?.token);
    res.send({
      isValid: true,
      data: data,
    });
  } catch (e) {
    res.send({
      isValid: false,
      error: e.message,
    });
  }
};
