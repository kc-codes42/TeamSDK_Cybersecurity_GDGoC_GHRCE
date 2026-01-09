const { admin } = require("../config/firebase");

async function setAdmin(uid) {
  await admin.auth().setCustomUserClaims(uid, { role: "admin" });
  console.log("Admin role assigned");
}

setAdmin("S4XeNs9H1ITxSEFfRT8oTsCyRXT2");
