import express from "express";
import { addBook } from "../controller/libraryController.js";
import { libraryMulter } from "../util/multer.js";

// init router
const router = express.Router();

// set routers
router.post("/library", libraryMulter, addBook);

// export defalut
export default router;
