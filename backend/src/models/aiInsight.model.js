function buildAIInsight(data) {
  return {
    insightId: data.insightId,
    eventId: data.eventId,
    riskScore: data.riskScore,
    classification: data.classification,
    explanation: data.explanation,
    recommendedAction: data.recommendedAction,
    model: data.model,
    createdAt: new Date(),
  };
}

module.exports = { buildAIInsight };
