import inquirer from "inquirer";
import { promptDatabase } from "../index2.js";

const AWSquestionFunction = function (serviceType, serviceInfo) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "accessKeyId",
          message: "Enter your service access key ID:",
        },
        {
          type: "password",
          name: "secretAccessKey",
          message: "Enter your service secret access key:",
          mask: "*",
        },
        {
          type: "password",
          name: "confirmSecretAccessKey",
          message: "Confirm secretAcessKey",
          mask: "*",
          validate: function (value, answers) {
            if (value !== answers.secretAccessKey) {
              return "Passwords do not match";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "region",
          message: "Enter your service region:",
        },
        {
          type: "input",
          name: "name",
          message: "Enter your service name:",
        },
        {
          type: "confirm",
          name: "addAnother",
          message: "Do you want to add another database?",
          default: false,
        },
      ])
      .then((AWSanswers) => {
        const { addAnother, confirmPassword, ...modifiedAnswers } = AWSanswers;
        serviceInfo.push({ serviceType, ...modifiedAnswers });
        if (AWSanswers.addAnother) {
          promptDatabase().then(resolve).catch(reject);
        } else {
          resolve();
        }
      })
      .catch(reject);
  });
};

export { AWSquestionFunction };
