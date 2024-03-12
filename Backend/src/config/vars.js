import { fileURLToPath } from "url";
import path from "path";
import dotenvSafe from "dotenv-safe";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import .env variables
dotenvSafe.config({
  path: path.join(__dirname, "../../.env"),
  example: path.join(__dirname, "../../.env.example"),
});

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpirationInterval = process.env.JWT_EXPIRATION_MINUTES;
export const logs = process.env.NODE_ENV === "production" ? "combined" : "dev";
