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
        break;
      case "MongoDB":
        mongodbConnection(servicesInfo);
        break;
      case "S3":
        generateS3ObjectConnection(servicesInfo);
        break;
      case "Cognito":
        generateCognitoObjectConnection(servicesInfo);
        break;
      default:
        console.error("Unknown service type:", servicesInfo.serviceType);
    }
  } catch (e) {
    console.error(e);
  }
};

export { connect };
