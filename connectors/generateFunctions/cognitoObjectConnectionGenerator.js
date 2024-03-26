import fs from "fs";
import path from "path";

const generateCognitoObjectConnection = function () {
  // Construct the file path relative to the current module
  const filePath = path.join("./connectors/", "cognito.js");

  console.log("Chguei aqui");
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
};

export { generateCognitoObjectConnection };
