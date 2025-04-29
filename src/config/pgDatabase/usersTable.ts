import pool from "./dbConnect";

const userTable = async () => {
  const userTableQuery = `CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) UNIQUE NOT NULL,
  is_verified BOOLEAN DEFAULT false,
  verification_token VARCHAR(255),
  reset_token VARCHAR(255),
  reset_token_expiry TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  )`;

  try {
   await  pool.query(userTableQuery);
   console.log("Users Table Created Successfully!")
  } catch (error) {
    console.log("Error Creating Users Table", error)
  }
};

export default userTable;