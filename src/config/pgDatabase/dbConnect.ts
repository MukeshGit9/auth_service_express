import { Pool } from "pg";
import dotenv from "dotenv";
import userTable from "./usersTable";
dotenv.config();

// create a new pool instance
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool
  .connect()
  .then(() => {
    console.log("Connected to Postgres DB Successfully!");
    userTable();
  })
  .catch((error) => {
    console.error("Unexpected error on idle client", error);
  });

export default pool;
