import inquirer from "inquirer";

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
        },
      ])
      .then((database) => {
        const { addAnother, confirmPassword, ...modifiedAnswers } = database;
        serviceInfo.push({ serviceType, ...modifiedAnswers });
        resolve(serviceInfo[0]);
      })
      .catch(reject);
  });
};

export { StandardDatabasesFunction };
