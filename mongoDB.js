import inquirer from "inquirer";
import { promptDatabase } from "./index2.js";
import { StandardDatabasesFunction } from "./databases.js";

const MongoDBFunction = function (databaseType, databaseInfo) {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "deploymentType",
        message: "Is MongoDB hosted in a cluster or locally?",
        choices: ["Cluster", "Locally"],
      },
    ])
    .then((deploymentAnswer) => {
      const { deploymentType } = deploymentAnswer;
      if (deploymentType === "Cluster") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "clusterConnectionString",
              message: "Enter your MongoDB cluster connection string:",
            },
          ])
          .then((mongoDBAnswers) => {
            databaseInfo.push({ databaseType, ...mongoDBAnswers });
            return inquirer.prompt([
              {
                type: "confirm",
                name: "addAnother",
                message: "Do you want to add another database?",
                default: false,
              },
            ]);
          })
          .then((confirmation) => {
            if (confirmation.addAnother) {
              return promptDatabase();
            } else {
              return Promise.resolve();
            }
          });
      } else {
        return StandardDatabasesFunction(databaseType, databaseInfo);
      }
    });
};

export { MongoDBFunction };
