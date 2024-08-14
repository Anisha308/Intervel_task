import { DataTypes } from "sequelize";
import sequelize from "../config/dbsql.js"; // Sequelize instance for MySQL

const Product = sequelize.define(
  "Product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // This should be the only autoIncrement column
      primaryKey: true, // It must be defined as the primary key
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchase_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    sales_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    profit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

export default Product;
