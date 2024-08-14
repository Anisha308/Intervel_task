// models/ProfitRecord.js
import { DataTypes } from "sequelize";
import pgClient from "../config/dbpg.js"; // Sequelize instance for PostgreSQL

const ProfitRecord = pgClient.define(
  "ProfitRecord",
  {
    record_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "ProfitRecords", // Ensure this matches the table name in your database
    timestamps: true, // If you want createdAt and updatedAt fields
  }
);

export default ProfitRecord;
