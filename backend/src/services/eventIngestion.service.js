const { db } = require("../config/firebase");
const { buildSecurityEvent } = require("../models/securityEvent.model");
const { v4: uuidv4 } = require("uuid");

async function ingestSecurityEvent(payload) {
  const eventId = uuidv4();

  const event = buildSecurityEvent({
    eventId,
    source: payload.source,
    severity: payload.severity,
    eventType: payload.eventType,
    message: payload.message,
    actor: payload.actor,
    metadata: payload.metadata,
  });

  await db.collection("security_events").doc(eventId).set(event);

  return event;
}

module.exports = { ingestSecurityEvent };
