const { ingestSecurityEvent } = require("../services/eventIngestion.service");
const { generateInsightForEvent } = require("../services/aiAnalysis.service");

async function createEvent(req, res) {
  try {
    const event = await ingestSecurityEvent(req.body);
    const insight = await generateInsightForEvent(event);

    res.status(201).json({
      event,
      insight,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Event processing failed" });
  }
}

module.exports = { createEvent };
