import { mySqlConnection } from "./mysqlConnection.js";

const connect = async function (servicesInfo) {
  try {
    servicesInfo.forEach((service) => {
      if (service.serviceType === "MySQL") {
        mySqlConnection(service);
      }
    });
  } catch (e) {
    console.error(e);
  }
};

export { connect };
