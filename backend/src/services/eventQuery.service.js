const { db } = require("../config/firebase");

async function getRecentEvents({ severity, source, limit = 20 }) {
  let query = db.collection("security_events").orderBy("createdAt", "desc");

  if (severity) query = query.where("severity", "==", severity);
  if (source) query = query.where("source", "==", source);

  query = query.limit(limit);

  const snapshot = await query.get();
  return snapshot.docs.map(doc => doc.data());
}

module.exports = { getRecentEvents };
