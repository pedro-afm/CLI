import { MongoClient } from "mongodb";
import { mongodbCollectionsConnection } from "../generateConfigs/generateMongoDBEntities/mongodb.js";
import { generateMongoDBObjectConnection } from "../db/generateFunctions/mongoObjectConnectionGenerator.js";

//const client = new MongoClient();
let uri;

const mongodbConnection = async function (mongodbCredentials) {
  try {
    const { databaseName } = mongodbCredentials;
    if (mongodbCredentials.clusterName) {
      const { user, password, clusterName, databaseName } = mongodbCredentials;
      uri = `mongodb+srv://${user}:${password}@${clusterName}.mongodb.net/${databaseName}`;
    } else {
      const { user, password, port, databaseName } = mongodbCredentials;
      uri = `mongodb://${user}:${password}@localhost:${port}/${databaseName}`;
    }

    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");

    // To generate the js file for connection with mongodb
    await generateMongoDBObjectConnection(mongodbCredentials);

    await mongodbCollectionsConnection(client, databaseName);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export { mongodbConnection };
