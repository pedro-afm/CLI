import fs from "fs";
import path from "path";

const generateMongoDBObjectConnection = async function (credentials) {
  try {
    // Construct the file path relative to the current module
    const filePath = path.join("./db/", "mongodb.js");

    const mongodbConnection = `export default {
    type: "mongodb",
    uri: "",
    databaseName: ${credentials.databaseName}
  }`;
    fs.writeFileSync(filePath, mongodbConnection);
  } catch (e) {
    throw new Error("Error generating mongodb connection file: ", e);
  }
};

export { generateMongoDBObjectConnection };
