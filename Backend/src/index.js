import { port, env } from "./config/vars.js";
import logger from "./config/logger.js";
import app from "./config/express.js";
import mysqlConnection from "./config/mysql.js";

try {
  await mysqlConnection.getConnection();
  app.listen(port);
  logger.info(`server started on port ${port} (${env})`);
} catch (e) {
  logger.error(`Connection failed`);
  process.abort();
}

export default app;
