import inquirer from "inquirer";

const databaseInfo = [];

function promptDatabase() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "databaseType",
        message: "Select database type",
        choices: ["MySQL", "PostgreSQL", "MongoDB", "S3", "DynamoDB"],
      },
      {
        type: "input",
        name: "host",
        message: "Enter database host:",
      },
      {
        type: "input",
        name: "username",
        message: "Enter database username:",
      },
      {
        type: "password",
        name: "password",
        message: "Enter database password: ",
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
    .then((answers) => {
      databaseInfo.push(answers);
      if (answers.addAnother) {
        return promptDatabase(); // Call promptDatabase recursively if user wants to add another database
      } else {
        return Promise.resolve(); // Resolve the promise to exit the loop
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
