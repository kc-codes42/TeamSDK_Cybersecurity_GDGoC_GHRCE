const { getRecentEvents } = require("../services/eventQuery.service");
const { getInsightsByEvent } = require("../services/insightQuery.service");

async function fetchEvents(req, res) {
  try {
    const { severity, source, limit } = req.query;
    const events = await getRecentEvents({ severity, source, limit: Number(limit) || 20 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
}

async function fetchInsights(req, res) {
  try {
    const { eventId } = req.params;
    const insights = await getInsightsByEvent(eventId);
    res.json(insights);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch insights" });
  }
}

module.exports = { fetchEvents, fetchInsights };
