
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_DB_HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  port: process.env.MYSQL_DB_PORT, // Add this line
});

connection.connect((err) => {
    console.log('hi');
    
  if (err) {
    console.error("Error connecting:", err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

connection.end();
export default connection;

