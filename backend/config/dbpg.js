import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const pgClient = new Sequelize(
  process.env.PG_DB_NAME,
  process.env.PG_DB_USER,
  process.env.PG_DB_PASSWORD,
  {
    host: process.env.PG_DB_HOST,
    port: process.env.PG_DB_PORT,
    dialect: "postgres",
  }
);

pgClient
  .sync({ alter: true })
  .then(() => {
    console.log("ProfitRecords table has been synchronized.");
  })
  .catch((err) => {
    console.error("Error syncing ProfitRecords table:", err.message);
  });
export default pgClient;
