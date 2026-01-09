const express = require("express");
const validateSecurityEvent = require("../middleware/validateSecurityEvent");
const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");
const { createEvent } = require("../controllers/events.controller");

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize("admin"),
  validateSecurityEvent,
  createEvent
);

module.exports = router;
