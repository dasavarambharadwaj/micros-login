import { fileURLToPath } from "url";
import path from "path";
import dotenvSafe from "dotenv-safe";

const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpirationInterval = process.env.JWT_EXPIRATION_MINUTES;
export const logs = process.env.NODE_ENV === "production" ? "combined" : "dev";
export const mysqlHost = process.env.MYSQL_HOST;
export const mysqlPort = process.env.MYSQL_PORT;
export const mysqlUser = process.env.MYSQL_USER;
export const mysqlPassword = process.env.MYSQL_PASSWORD;
export const mysqlDB = process.env.MYSQL_DB;
