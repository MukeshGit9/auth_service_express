import pool from "../config/pgDatabase/dbConnect";
import bcrypt from "bcryptjs";

export const findUserByEmail = async (email: string) => {
  const query = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  return query.rows[0];
};

export const checkPassword = async (entered: string, hashed: string) => {
  return await bcrypt.compare(entered, hashed);
};
