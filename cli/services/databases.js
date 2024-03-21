import inquirer from "inquirer";
import { promptServices } from "../index2.js";

const StandardDatabasesFunction = function (serviceType, serviceInfo) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "host",
          message: "Enter database host:",
        },
        {
          type: "input",
          name: "port",
          message: "Enter database port:",
        },
        {
          type: "input",
          name: "user",
          message: "Enter database username:",
        },
        {
          type: "input",
          name: "databaseName",
          message: "Enter database name:",
        },
        {
          type: "input",
          name: "password",
          message: "Enter database password:",
          //mask: "*",
        },
        /* {
          type: "input",
          name: "confirmPassword",
          message: "Confirm database password",
          //mask: "*",
          validate: function (value, answers) {
            if (value !== answers.password) {
              return "Passwords do not match";
            }
            return true;
          },
        }, */
        {
          type: "confirm",
          name: "addAnother",
          message: "Do you want to add another database?",
          default: false,
        },
      ])
      .then((database) => {
        const { addAnother, confirmPassword, ...modifiedAnswers } = database;
        serviceInfo.push({ serviceType, ...modifiedAnswers });
        if (database.addAnother) {
          promptServices().then(resolve).catch(reject);
        } else {
          resolve(serviceInfo);
        }
      })
      .catch(reject);
  });
};

export { StandardDatabasesFunction };
