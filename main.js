import { promptServices } from "./cli/index2.js";
import { connect } from "./connections/index.js";

async function main() {
  try {
    const servicesInfo = await promptServices();
    const serviceConnection = connect(servicesInfo);
    //const connection = await serviceConnection.connect();
    //console.log(connection);
    //console.log(connection);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
