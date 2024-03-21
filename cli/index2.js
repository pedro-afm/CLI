import inquirer from "inquirer";
import {
  AWSquestionFunction,
  MongoDBFunction,
  StandardDatabasesFunction,
} from "./services/index.js";

const serviceInfo = [];

async function promptServices() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "serviceType",
        message: "Select service type",
        choices: ["MySQL", "PostgreSQL", "MongoDB", "S3", "DynamoDB", "RDS"],
      },
    ])
    .then(async (answers) => {
      const { serviceType } = answers;

      if (
        serviceType === "S3" ||
        serviceType === "DynamoDB" ||
        serviceType === "RDS"
      ) {
        return AWSquestionFunction(serviceType, serviceInfo);
      } else if (serviceType === "MongoDB") {
        return MongoDBFunction(serviceType, serviceInfo);
      } else {
        return StandardDatabasesFunction(serviceType, serviceInfo);
      }
    });
}

export { promptServices, serviceInfo };
