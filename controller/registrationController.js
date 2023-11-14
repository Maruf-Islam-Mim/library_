import bcrypt from "bcrypt";
import Registration from "../models/Registration.js";

/**
 * @description Create Register Account
 * @Route /api/v1/registration
 * @Method post
 * @access PUBLIC
 */
export const regController = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const data = await Registration.create({
    name,
    email,
    password: hashPassword,
  });
  res.status(200).json({ user: data });
};
/**
 * @description Get All Register Account
 * @Route /api/v1/registration
 * @Method get
 * @access PUBLIC
 */
export const getAllReg = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await Registration.find();
  res.status(200).json({ message: "Registration Success", user: data });
};
