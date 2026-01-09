function buildSecurityEvent(data) {
  return {
    eventId: data.eventId,
    source: data.source,
    severity: data.severity,
    eventType: data.eventType,
    message: data.message,
    actor: data.actor || {},
    metadata: data.metadata || {},
    createdAt: new Date(),
  };
}

module.exports = { buildSecurityEvent };
