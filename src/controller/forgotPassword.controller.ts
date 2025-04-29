import { Request, Response } from "express";
import {
  handleForgotPassword,
  handleResetPassword,
} from "../service/forgotPassword.service";

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await handleForgotPassword(email);
    res
      .status(201)
      .json({
        status: "success",
        message: "Password reset link sent to your email",
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "error", message: "Email is required" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { resetPasswordToken, newPassword } = req.body;
    if (!resetPasswordToken || !newPassword) {
      console.log("Missing token or password");
      return res
        .status(400)
        .json({
          status: "error",
          message: "Token and new password are required",
        });
    }
    await handleResetPassword(resetPasswordToken, newPassword);
    res
      .status(201)
      .json({ status: "success", message: "Password reset Successfully!" });
  } catch (error) {}
};
