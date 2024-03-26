import inquirer from "inquirer";
import { StandardDatabasesFunction } from "./databases.js";

const MongoDBFunction = function (serviceType, serviceInfo) {
  return new Promise((resolve, reject) => {
    inquirer
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
                name: "user",
                message: "Enter your MongoDB cluster username:",
              },
              {
                type: "input",
                name: "clusterName",
                message: "Enter your MongoDB clusterName:",
              },
              {
                type: "input",
                name: "databaseName",
                message: "Enter your MongoDB cluster databaseName:",
              },
              {
                type: "input",
                name: "password",
                message: "Enter your MongoDB cluster password:",
              },
            ])
            .then((mongoDBAnswers) => {
              serviceInfo.push({ serviceType, ...mongoDBAnswers });
              resolve(serviceInfo[0]);
            })
            .catch(reject);
        } else {
          StandardDatabasesFunction(serviceType, serviceInfo)
            .then(resolve)
            .catch(reject);
        }
      })
      .catch(reject);
  });
};

export { MongoDBFunction };
