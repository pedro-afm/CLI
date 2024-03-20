const { program } = require("commander");

program.option("--first").option("-s, --separator <char>");

program.parse();

const options = program.opts();

if (program.args[0]) {
  const limit = options.first ? 1 : undefined;
  console.log(program.args[0].split(options.separator, limit));
} else {
  console.log("No input provided.");
}
