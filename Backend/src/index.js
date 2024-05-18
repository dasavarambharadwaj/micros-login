import { port, env } from "./config/vars.js";
import logger from "./config/logger.js";
import app from "./config/express.js";
import mysqlConnection from "./config/mysql.js";

mysqlConnection.getConnection(function (err) {
  if (err) {
    logger.error(`Connection failed`);
    process.abort();
  } else {
    app.listen(port);
    logger.info(`server started on port ${port} (${env})`);
  }
});

export default app;
