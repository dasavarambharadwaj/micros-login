import * as express from "express";
import {
  addUser,
  checkUser,
  getAllUsers,
  validateToken,
} from "../../../controllers/login.js";
import { validateSchema } from "../../validations/index.js";
import {
  addUserSchema,
  loginSchema,
  tokenValidationSchema,
} from "../../validations/schemas.js";
import { authenticateToken } from "../../middlewares/authentication.js";

const router = express.Router();

router.get("/status", (req, res) => {
  res.send("OK");
});

router.post("/login", validateSchema(loginSchema), checkUser);

router.post("/create-user", validateSchema(addUserSchema), addUser);

router.get("/get-all-users", authenticateToken, getAllUsers);

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
