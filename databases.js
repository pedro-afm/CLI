import inquirer from "inquirer";
import { promptDatabase } from "./index2.js";

const StandardDatabasesFunction = function (databaseType, databaseInfo) {
  return inquirer
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
        type: "password",
        name: "password",
        message: "Enter database password:",
        mask: "*",
      },
      {
        type: "password",
        name: "confirmPassword",
        message: "Confirm database password",
        mask: "*",
        validate: function (value, answers) {
          if (value !== answers.password) {
            return "Passwords do not match";
          }
          return true;
        },
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Do you want to add another database?",
        default: false,
      },
    ])
    .then((database) => {
      const { addAnother, confirmPassword, ...modifiedAnswers } = database;
      databaseInfo.push({ databaseType, ...modifiedAnswers });
      if (database.addAnother) {
        return promptDatabase();
      } else {
        return Promise.resolve();
      }
    });
};

export { StandardDatabasesFunction };
