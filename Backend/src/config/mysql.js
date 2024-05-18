import * as mysql from "mysql2";
import {
  mysqlDB,
  mysqlHost,
  mysqlPassword,
  mysqlPort,
  mysqlUser,
} from "./vars.js";

export default mysql.createPool({
  host: mysqlHost,
  port: parseInt(mysqlPort),
  user: mysqlUser,
  password: mysqlPassword,
  database: mysqlDB,
});
