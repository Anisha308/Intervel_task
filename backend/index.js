import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
import Router from "./Routes/ProductRoutes.js";

const app = express();
const corsOptions = {
  origin: process.env.REACT_APP_API_BASE_URL,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
