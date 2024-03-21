import mysql from "mysql2/promise"; // Import mysql2/promise for using promises

const mySqlConnection = async function (mySQLCredentials) {
  try {
    // Create a connection pool
    const pool = mysql.createPool({
      host: mySQLCredentials.host,
      user: mySQLCredentials.user,
      password: mySQLCredentials.password,
      database: mySQLCredentials.databaseName,
    });

    // Get a connection from the pool
    const connection = await pool.getConnection();

    try {
      // Execute the query
      const [rows, fields] = await connection.query("SHOW TABLES");
      console.log(rows);
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
