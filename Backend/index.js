import dotenv from "dotenv"
import expressServer from "./services/express-server.js"
import connectDB from "./services/connect-db.js"
import path from 'path';
(async () => {
  const __dirname = path.resolve();
  dotenv.config({ path: __dirname + "/.env" });
  let db = new connectDB();
  let connectionEstablished = await db.testConnection();
  if (connectionEstablished) {
    global.connection = db.connection;
    let server = new expressServer(
      process.env.NODE_PORT,
      process.env.ORIGIN_ADDRESS
    );
    server.start();
  } else {
    console.log("Error while establishing connection.");
  }
})();