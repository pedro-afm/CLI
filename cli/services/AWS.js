import inquirer from "inquirer";

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
          type: "input",
          name: "secretAccessKey",
          message: "Enter your service secret access key:",
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
      ])
      .then((AWSanswers) => {
        const { addAnother, confirmPassword, ...modifiedAnswers } = AWSanswers;
        serviceInfo.push({ serviceType, ...modifiedAnswers });
        resolve(serviceInfo[0]);
      })
      .catch(reject);
  });
};

export { AWSquestionFunction };
