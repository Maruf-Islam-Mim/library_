import express from "express";
import {
  getAllReg,
  regController,
} from "../controller/registrationController.js";

// init router
const router = express.Router();

// set routers
router.post("/api/v1/registration", regController);
router.get("/api/v1/registration", getAllReg);

// export defalut
export default router;
