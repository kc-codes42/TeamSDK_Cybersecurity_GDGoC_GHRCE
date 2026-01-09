const { db } = require("../config/firebase");
const { buildAIInsight } = require("../models/aiInsight.model");
const { v4: uuidv4 } = require("uuid");

/*
  Placeholder logic.
  Replace classifyEvent() with LLM call later.
*/
function classifyEvent(event) {
  let riskScore = 20;
  let classification = "benign";

  if (event.severity === "high") {
    riskScore = 70;
    classification = "suspicious";
  }

  if (event.severity === "critical") {
    riskScore = 95;
    classification = "malicious";
  }

  return {
    riskScore,
    classification,
    explanation: `Event classified based on severity=${event.severity}`,
    recommendedAction: "Review and take appropriate action",
    model: {
      name: "rule-engine",
      version: "v1",
    },
  };
}

async function generateInsightForEvent(event) {
  const analysis = classifyEvent(event);

  const insight = buildAIInsight({
    insightId: uuidv4(),
    eventId: event.eventId,
    ...analysis,
  });

  await db.collection("ai_insights").doc(insight.insightId).set(insight);

  return insight;
}

module.exports = { generateInsightForEvent };
