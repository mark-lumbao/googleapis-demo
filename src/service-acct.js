const fs = require("fs");
const { GoogleAuth } = require("google-auth-library");
const { listUsers, SCOPES } = require("./common");

const KEYPATH = "key.json";

/**
 * Service Account Authentication Method
 */
fs.readFile(KEYPATH, (err) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  listUsers(
    new GoogleAuth({
      keyFile: KEYPATH,
      scopes: SCOPES,
    })
  );
});
