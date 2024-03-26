import fs from "fs";

async function generateEntityFile(collection) {
  let content = {
    tables: {
      name: collection.name,
      database: "mongodb",
      columns: [],
    },
  };

  const fileName = `./entities/${collection.name}.js`;
  const fileContent = `export default ${JSON.stringify(content, null, 2)};`;
  fs.writeFileSync(fileName, fileContent);
  console.log(`File ${fileName} generated successfully.`);
}

export { generateEntityFile };
