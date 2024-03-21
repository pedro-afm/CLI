import fs from "fs";

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
        type: '${column.DATA_TYPE}',
        ${column.COLUMN_KEY ? "primaryKey: true," : ""}
        nullable: ${column.IS_NULLABLE},
        ${column.EXTRA ? `extra: '${column.EXTRA}',` : ""}
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

    fs.writeFile(`${tableName}.js`, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export { generateEntityFile };
