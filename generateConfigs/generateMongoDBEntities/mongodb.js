import { generateEntityFile } from "./generateEntityFile.js";

const mongodbCollectionsConnection = async function (client, databaseName) {
  try {
    const database = client.db(databaseName);
    const collections = await database.listCollections().toArray();

    for (const collection of collections) {
      await generateEntityFile(collection);
    }
  } catch (e) {
    throw new Error("Error connecting to database: " + e.message);
  }
};

export { mongodbCollectionsConnection };
