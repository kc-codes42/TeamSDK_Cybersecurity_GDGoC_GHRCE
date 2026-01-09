const { db } = require("../config/firebase");

async function testFirestore() {
  const ref = db.collection("system_check").doc("ping");
  await ref.set({
    status: "connected",
    timestamp: new Date(),
  });
  console.log("Firestore connection OK");
}

testFirestore();
