import mysql from "mysql2/promise";
import {
  mysqlDB,
  mysqlHost,
  mysqlPassword,
  mysqlPort,
  mysqlUser,
} from "./vars.js";

const connection = await mysql.createPool({
  host: mysqlHost,
  port: parseInt(mysqlPort),
  user: mysqlUser,
  password: mysqlPassword,
  database: mysqlDB,
});

export const runQuery = async function (query, payload) {
  try {
    return await connection.query(query, payload);
  } catch (e) {
    throw e;
  }
};
export default connection;
