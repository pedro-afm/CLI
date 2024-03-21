import inquirer from "inquirer";
import { promptServices } from "../index2.js";
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
                name: "clusterConnectionString",
                message: "Enter your MongoDB cluster connection string:",
              },
            ])
            .then((mongoDBAnswers) => {
              serviceInfo.push({ serviceType, ...mongoDBAnswers });
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
                promptServices().then(resolve).catch(reject);
              } else {
                resolve(serviceInfo);
              }
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
