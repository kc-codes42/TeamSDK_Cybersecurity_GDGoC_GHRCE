const { db } = require("../config/firebase");

async function getInsightsByEvent(eventId) {
  const snapshot = await db
    .collection("ai_insights")
    .where("eventId", "==", eventId)
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map(doc => doc.data());
}

module.exports = { getInsightsByEvent };
