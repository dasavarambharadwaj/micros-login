import { port, env } from "./config/vars.js";
import logger from "./config/logger.js";
import app from "./config/express.js";

app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

export default app;
