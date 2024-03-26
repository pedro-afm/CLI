import fs from "fs";
import { generateEntityRelation } from "./generateEntityRelations.js";
let entities = [];
let relations;

async function generateEntityFile(columns, tableName, totalEntities) {
  let content = {
    tables: {
      name: tableName,
      database: "mysql",
      columns: columns.map((column, index) => {
        if (column.COLUMN_KEY === "MUL") {
          relations = generateEntityRelation(column, tableName);
          return {
            name: column.COLUMN_NAME,
            type: "object",
            primaryKey: false,
            nullable: column.IS_NULLABLE ? true : false,
            defaultValue: column.COLUMN_DEFAULT ? column.COLUMN_DEFAULT : null,
            columnType: "object",
            extra: column.EXTRA,
            isObject: true,
            relationType: "n:1",
            foreignEntity: "",
            foreignKey: column.COLUMN_NAME,
          };
        } else {
          return {
            name: column.COLUMN_NAME,
            type: column.DATA_TYPE === "varchar" ? "string" : column.DATA_TYPE,
            primaryKey: column.COLUMN_KEY ? true : false,
            nullable: column.IS_NULLABLE ? true : false,
            defaultValue: column.COLUMN_DEFAULT ? column.COLUMN_DEFAULT : null,
            columnType:
              column.DATA_TYPE === "varchar" ? "string" : column.DATA_TYPE,
            extra: column.EXTRA ? column.EXTRA : "",
          };
        }
      }),
    },
  };

  entities.push(content);

  // To add the relations vinculated for each entity
  if (entities.length === totalEntities) {
    entities.forEach((entity) => {
      if (relations && relations.length > 0) {
        relations.forEach((relation) => {
          entity.tables.columns.forEach((column) => {
            if (column.primaryKey && column.name === relation.foreignKey) {
              entity.tables.columns.push(relation);
            }
          });
        });
      }
    });

    // To create the js file for each entity
    entities.forEach((entity) => {
      const fileName = `./entities/${entity.tables.name}.js`;
      const fileContent = `export default ${JSON.stringify(entity, null, 2)};`;
      fs.writeFileSync(fileName, fileContent);
      console.log(`Arquivo ${fileName} gerado com sucesso.`);
    });
  }
}

export { generateEntityFile };
