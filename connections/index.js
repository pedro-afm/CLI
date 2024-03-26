import { mySqlConnection } from "./mysqlConnection.js";
import { mongodbConnection } from "./mongodbConnection.js";
import { generateS3ObjectConnection } from "../db/generateFunctions/s3ObjectConnectionGenerator.js";
import { generateCognitoObjectConnection } from "../connectors/generateFunctions/cognitoObjectConnectionGenerator.js";

const connect = async function (servicesInfo) {
  console.log(servicesInfo);
  try {
    switch (servicesInfo.serviceType) {
      case "MySQL":
        mySqlConnection(servicesInfo);
      case "MongoDB":
        mongodbConnection(servicesInfo);
      case "S3":
        generateS3ObjectConnection();
      case "Cognito":
        generateCognitoObjectConnection();
    }
  } catch (e) {
    console.error(e);
  }
};

export { connect };
