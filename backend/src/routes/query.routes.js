const express = require("express");
const authenticate = require("../middleware/authenticate");
const { fetchEvents, fetchInsights } = require("../controllers/query.controller");

const router = express.Router();

router.use(authenticate);

router.get("/events", fetchEvents);
router.get("/insights/:eventId", fetchInsights);

module.exports = router;
