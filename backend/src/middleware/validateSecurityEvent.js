const REQUIRED_FIELDS = [
  "source",
  "severity",
  "eventType",
  "message",
  "actor",
];

const VALID_SOURCES = ["auth", "network", "system", "api"];
const VALID_SEVERITIES = ["low", "medium", "high", "critical"];

function validateSecurityEvent(req, res, next) {
  const body = req.body;

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      return res.status(400).json({ error: `Missing field: ${field}` });
    }
  }

  if (!VALID_SOURCES.includes(body.source)) {
    return res.status(400).json({ error: "Invalid source" });
  }

  if (!VALID_SEVERITIES.includes(body.severity)) {
    return res.status(400).json({ error: "Invalid severity" });
  }

  if (!body.actor.ip) {
    return res.status(400).json({ error: "Actor IP required" });
  }

  next();
}

module.exports = validateSecurityEvent;
