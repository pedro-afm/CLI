const mongodbCollectionsConnection = async function (client, databaseName) {
  const database = client.db(databaseName);
  const collections = await database.listCollections().toArray();

  const collectionNames = collections.map((collection) => {
    return collection.name;
  });

  console.log(collectionNames);
};

export { mongodbCollectionsConnection };
