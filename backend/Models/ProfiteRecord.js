import { DataTypes } from "sequelize";
import pgClient from "../config/postgresConfig.js";

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
    tableName: "ProfitRecords",
    timestamps: true,
  }
);

export default ProfitRecord;
