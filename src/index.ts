import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import defaultRoute from './routes/default.route'
import signupRoute from './routes/signup.route'
import loginRoute from './routes/login.route'
import forgotPasswordRoute from './routes/forgotPassword.route'
import resetPasswordRoute from './routes/forgotPassword.route'
import pool from './config/pgDatabase/dbConnect'; // Import the database pool

dotenv.config(); // Load environment variables

const app = express();
const server = http.createServer(app);

// middleware body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ;
const BASE_URL_SERVER = process.env.BASE_URL_SERVER ;

// default route------------------------------------------------------------------DEFAULT ROUTE "/"
app.use('/',defaultRoute)

// signup root -------------------------------------------------------------------SIGNUP ROUTE "/api/v1/auth/signup"
app.use("/",signupRoute)
// signup(app, pool)

// login route--------------------------------------------------------------------LOGIN ROUTE "/api/v1/auth/signup"
app.use("/", loginRoute)

// forgot password route----------------------------------------------------------FORGOT PASSWORD '/api/v1/auth/forgotpsd'
app.use('/',forgotPasswordRoute)
app.use('/',resetPasswordRoute)


server.listen(PORT, () => {
  console.log(`AuthService is running on URL ${BASE_URL_SERVER}`);
});
