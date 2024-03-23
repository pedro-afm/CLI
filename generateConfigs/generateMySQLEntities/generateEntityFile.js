import fs from "fs";
import { generateEntityRelation } from "./generateEntityRelations.js";

async function generateEntityFile(columns, tableName) {
  let relations;
  return new Promise((resolve, reject) => {
    const lastIndex = columns.length - 1;
    const content = `export default {
  tables: {
    name: '${tableName}',
    database: 'mysql',
    columns: [
      ${columns
        .map((column, index) => {
          const isLast = index === lastIndex;
          if (column.COLUMN_KEY === "MUL") {
            relations = generateEntityRelation(column, tableName);
            return `{
              name: '${column.COLUMN_NAME}',
              type: "object",
              primaryKey: false,
              ${column.IS_NULLABLE ? "nullable: true," : ""}
              ${
                column.COLUMN_DEFAULT
                  ? `defaultValue: '${column.COLUMN_DEFAULT}',`
                  : "defaultValue: null,"
              }
              columnType: "object",
              extra: '${column.EXTRA}',
              isObject: true,
              relationType: "n:1",
              foreignEntity: '',
              foreignKey: '${column.COLUMN_NAME}',
            },`;
          } else {
            return `{
              name: '${column.COLUMN_NAME}',
              ${
                column.DATA_TYPE === "varchar"
                  ? `type: "string",`
                  : `type: '${column.DATA_TYPE}',`
              }
              ${column.COLUMN_KEY ? "primaryKey: true," : "primaryKey: false,"}
              ${column.IS_NULLABLE ? "nullable: true," : ""} 
              ${
                column.COLUMN_DEFAULT
                  ? `defaultValue: '${column.COLUMN_DEFAULT}',`
                  : "defaultValue: null,"
              }
              ${
                column.DATA_TYPE === "varchar"
                  ? `columnType: "string",`
                  : `columnType: '${column.DATA_TYPE}',`
              }
              ${column.EXTRA ? `extra: '${column.EXTRA}',` : "extra: '',"}
            }${isLast ? "" : ","}`;
          }
        })
        .join("\n      ")},
    ],
  },
};`;

    fs.writeFile(`./entities/${tableName}.js`, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export { generateEntityFile };
