import fs from "fs";
import path from "path";

const generateMySQLObjectConnection = function (credentials) {
  // Construct the file path relative to the current module
  const filePath = path.join("./db/", "mysql.js");
  const { port, databaseName } = credentials;
  const mysqlConnection = `export default {
    type: "mysql",
    port: ${port},
    user: "",
    password: "",
    databaseName: ${databaseName}
  }`;

  fs.writeFileSync(filePath, mysqlConnection);
};

export { generateMySQLObjectConnection };
