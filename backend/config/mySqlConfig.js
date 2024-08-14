import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  process.env.MYSQL_DB_PASSWORD,
  {
    host: process.env.MYSQL_DB_HOST,
    dialect: "mysql",
    port: process.env.MYSQL_DB_PORT,
    logging: false,
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
