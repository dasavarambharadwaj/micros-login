import * as express from "express";
import {
  addUser,
  checkUser,
  validateToken,
} from "../../../controllers/login.js";
import { validateSchema } from "../../validations/index.js";
import {
  addUserSchema,
  loginSchema,
  tokenValidationSchema,
} from "../../validations/schemas.js";

const router = express.Router();

router.get("/status", (req, res) => {
  res.send("OK");
});

router.post("/login", validateSchema(loginSchema), checkUser);

router.post("/create-user", validateSchema(addUserSchema), addUser);

router.post(
  "/validate-token",
  validateSchema(tokenValidationSchema),
  validateToken
);
/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

export default router;
