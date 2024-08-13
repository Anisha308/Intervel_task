import pkg from "pg"; // Import the default export
const { Client } = pkg; // Extract Client from the default export

const client = new Client({
  host: process.env.PG_DB_HOST,
  user: process.env.PG_DB_USER,
  port: process.env.PG_DB_PORT,
  password: process.env.PG_DB_PASSWORD, // Fixed typo here
  database: process.env.PG_DB_NAME,
});



export default client;
