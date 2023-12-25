import express from "express"
import https from "https"
import fs from "fs"
import {setRoutes} from "./router.js"
import cors from "cors"
function server(port, originAddress) {
  const APP = express();
  initializeMiddleWares(originAddress);
  initializeRoutes();

  function initializeMiddleWares(originAddress) {
    APP.use(
      cors({
        origin: originAddress,
        optionsSuccessStatus: 200,
      })
    );
    APP.use(express.json());
  }
  
  function initializeRoutes() {
    setRoutes(APP);
  }
  this.start = function() {
    if (process.env.SERVER === "prod") {
      var options = {
        key: fs.readFileSync(
          `/etc/letsencrypt/live/${process.env.DOMAIN_NAME}/privkey.pem`
        ),
        cert: fs.readFileSync(
          `/etc/letsencrypt/live/${process.env.DOMAIN_NAME}/fullchain.pem`
        ),
      };
      https.createServer(options, APP).listen(port, () => {
        console.log("Server running at port: " + port);
      });
    } else {
      APP.listen(port, () => {
        console.log("Server running at port: " + port);
      });
    }
  }

}
export default server
