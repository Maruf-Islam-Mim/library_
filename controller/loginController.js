import login from "../models/login.js";
///
/**
 * @description login Controller
 * @Route /api/v1/login
 * @Method post
 * @access PUBLIC
 */
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const data = await login.create({
    email,
    password,
  });
  res.status(200).json({ user: data });
};
