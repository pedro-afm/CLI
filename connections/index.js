import { mySqlConnection } from "./mysqlConnection.js";
import { mongodbConnection } from "./mongodbConnection.js";

const connect = async function (servicesInfo) {
  try {
    servicesInfo.forEach((service) => {
      if (service.serviceType === "MySQL") {
        mySqlConnection(service);
      } else if (service.serviceType === "MongoDB") {
        mongodbConnection(service);
      }
    });
  } catch (e) {
    console.error(e);
  }
};

export { connect };
