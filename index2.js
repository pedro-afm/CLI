import inquirer from "inquirer";
import {
  AWSquestionFunction,
  MongoDBFunction,
  StandardDatabasesFunction,
} from "./services/index.js";

const serviceInfo = [];

async function promptDatabase() {
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

await promptDatabase()
  .then(() => {
    console.log("Service setup completed", serviceInfo);
  })
  .catch((error) => {
    console.error("Error during prompt: ", error);
  });

export { promptDatabase };
