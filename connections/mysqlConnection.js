import mysql from "mysql2/promise"; // Import mysql2/promise for using promises
import { tablesConnection } from "../generateConfigs/generateMySQLEntities/mysql.js";

const mySqlConnection = async function (mySQLCredentials) {
  try {
    const { host, user, password, databaseName } = mySQLCredentials;
    // Create a connection pool
    const pool = mysql.createPool({
      host: host,
      user: user,
      password: password,
      database: databaseName,
    });

    // Get a connection from the pool
    const connection = await pool.getConnection();

    try {
      // Execute the query
      await tablesConnection(connection, databaseName);
    } catch (error) {
      console.error("Error executing query:", error.message);
      throw error;
    } finally {
      // Always release the connection back to the pool
      connection.release();
    }
  } catch (error) {
    console.error("Error connecting to MySQL:", error.message);
    throw error;
  }
};

export { mySqlConnection };
