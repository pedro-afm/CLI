import fs from "fs";
import path from "path";

async function generateEntityFile(columns, tableName) {
  return new Promise((resolve, reject) => {
    const content = `export default {
  tables: {
    name: '${tableName}',
    database: 'mysql',
    columns: [
      ${columns
        .map(
          (column) => `{
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
      },`
        )
        .join("\n      ")},
    ],
    ${
      columns.backoffice
        ? `backoffice: {
      icon: '${columns.backoffice.icon}',
    },`
        : ""
    }
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
