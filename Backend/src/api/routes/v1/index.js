import * as express from "express";

const router = express.Router();

router.get("/status", (req, res) => {
  res.send("OK");
});

/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

export default router;
