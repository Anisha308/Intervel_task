
import dotenv from "dotenv";
import mysql from "mysql2";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME, // Database name
  process.env.MYSQL_DB_USER, // Database user
  process.env.MYSQL_DB_PASSWORD, // Database password
  {
    host: process.env.MYSQL_DB_HOST,
    dialect: "mysql", // Specify the database dialect
    port: process.env.MYSQL_DB_PORT, // Port number for MySQL
    logging: false, // Disable logging for cleaner console output
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to MySQL:", err);
  });

export default sequelize;

