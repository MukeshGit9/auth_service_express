import { Request, Response } from "express";
import  jwtTokenGenerator  from "../utils/jwtTokenGenerator";
import { findUserByEmail, checkPassword } from "../service/login.service";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //----------------------------------------------------------------------------------check all feilds required
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "All feilds are required" });
    }

    // -----------------------------------------------------------------------------find user
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User not found" });
    }

    // ---------------------------------------------------------------------------pass word match
    const isPasswordMatch = await checkPassword(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Credentials" });
    }

    // --------------------------------------------------------------------------check user verified
    if (user.is_verified === true) {
      const token = await jwtTokenGenerator(user.email);
      return res.status(200).json({
        status: "success",
        token,
        message:"User login successfully!!",
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
      });
    } else {
      return res
        .status(402)
        .json({
          status: "error",
          message: "User not verified, Please Signup again and Varify email",
        });
    }
  } catch (error) {
    console.log("Error while login", error)
    return res.status(500).json({status:"error", message:"Server Error or Wrong Credentials, Please try again"})
  }
};
