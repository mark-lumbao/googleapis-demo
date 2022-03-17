const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/admin.directory.user"];

/**
 * Lists the first 10 users in the domain.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listUsers(auth) {
  const service = google.admin({ version: "directory_v1", auth });
  service.users.list(
    {
      customer: process.env.GSUITE_ID,
      maxResults: 10,
      orderBy: "email",
    },
    (err, res) => {
      if (err) return console.error("The API returned an error:", err.message);

      const users = res.data.users;
      if (users.length) {
        console.log("Users:");
        users.forEach((user) => {
          console.log(`${user.primaryEmail} (${user.name.fullName})`);
        });
      } else {
        console.log("No users found.");
      }
    }
  );
}

module.exports = {
  listUsers,
  SCOPES,
};
