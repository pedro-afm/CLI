import fs from "fs";
import path from "path";

const generateCognitoObjectConnection = function (credentials) {
  try {
    // Construct the file path relative to the current module
    const filePath = path.join("./connectors/", "cognito.js");

    const cognitoConnection = `export default {
    connector: {
        cognito: {
            type: "auth",
            config: {
                region: "",
                userPoolId: "",
                credentials: {
                    accessKeyId: "",
                    secretAccessKey: "",
                }
            }
        }
    }
  }`;
    fs.writeFileSync(filePath, cognitoConnection);
  } catch (e) {
    throw e;
  }
};

export { generateCognitoObjectConnection };
