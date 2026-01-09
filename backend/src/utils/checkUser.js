const { admin } = require("../config/firebase");

admin.auth().getUser("S4XeNs9H1ITxSEFfRT8oTsCyRXT2")
  .then(user => console.log("User exists:", user.uid))
  .catch(err => console.error(err.message));
