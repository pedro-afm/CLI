import fs from "fs";
import path from "path";

const generateS3ObjectConnection = function (credentials) {
  try {
    // Construct the file path relative to the current module
    const filePath = path.join("./db/", "s3.js");

    const s3Connection = `export default {
    type: "s3",
    accessKeyId: "",
    secretAccessKey: "",
    region: "",
    bucket: "",
  }`;
    fs.writeFileSync(filePath, s3Connection);
  } catch (e) {
    throw e;
  }
};

export { generateS3ObjectConnection };
