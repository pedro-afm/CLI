import inquirer from "inquirer";
import { AWSquestionFunction } from "./AWS.js";
import { MongoDBFunction } from "./mongoDB.js";
import { StandardDatabasesFunction } from "./databases.js";

const databaseInfo = [];

function promptDatabase() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "databaseType",
        message: "Select database type",
        choices: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "S3",
          "DynamoDB",
          "Cognito",
          "RDS",
        ],
      },
    ])
    .then((answers) => {
      const { databaseType } = answers;

      if (
        databaseType === "S3" ||
        databaseType === "DynamoDB" ||
        databaseType === "Cognito" ||
        databaseType === "RDS"
      ) {
        return AWSquestionFunction(databaseType, databaseInfo);
      } else if (databaseType === "MongoDB") {
        return MongoDBFunction(databaseType, databaseInfo);
      } else {
        return StandardDatabasesFunction(databaseType, databaseInfo);
      }
    });
}

promptDatabase()
  .then(() => {
    console.log("Database setup completed", databaseInfo);
  })
  .catch((error) => {
    console.error("Error during prompt: ", error);
  });

export { promptDatabase };
