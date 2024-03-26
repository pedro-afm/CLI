import { mySqlConnection } from "./mysqlConnection.js";
import { mongodbConnection } from "./mongodbConnection.js";
import { generateS3ObjectConnection } from "../db/generateFunctions/s3ObjectConnectionGenerator.js";

const connect = async function (servicesInfo) {
  try {
    servicesInfo.forEach((service) => {
      if (service.serviceType === "MySQL") {
        mySqlConnection(service);
      } else if (service.serviceType === "MongoDB") {
        mongodbConnection(service);
      } else if (service.serviceType === "S3") {
        generateS3ObjectConnection();
      }
    });
  } catch (e) {
    console.error(e);
  }
};

export { connect };
