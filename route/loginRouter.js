import express from "express";
import { loginController } from "../controller/loginController.js";

// init router
const router = express.Router();

// set routers
router.post("/api/v1/login", loginController);

// export defalut
export default router;
