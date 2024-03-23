import { generateEntityFile } from "./generateEntityFile.js";

const mysqlTablesConnection = async function (connection, databaseName) {
  try {
    const [rows] = await connection.query("SHOW TABLES");

    // Iterate over each row in the result set
    for (const row of rows) {
      const tableName = row[`Tables_in_${databaseName}`];

      // Execute a SELECT * query for each table
      const [columns] = await connection.query(
        `SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT, COLUMN_KEY, EXTRA FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ? AND TABLE_SCHEMA = ?`,
        [tableName, databaseName]
      );

      await generateEntityFile(columns, tableName);
    }
  } catch (e) {
    throw e;
  }
};

export { mysqlTablesConnection };
