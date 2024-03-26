import fs from "fs";
import path from "path";

const generateMongoDBObjectConnection = function (databaseName) {
  // Construct the file path relative to the current module
  const filePath = path.join("./db/", "mongodb.js");

  const mongodbConnection = `export default {
    type: "mongodb",
    uri: "",
    databaseName: ${databaseName}
  }`;
  fs.writeFileSync(filePath, mongodbConnection);
};

export { generateMongoDBObjectConnection };
