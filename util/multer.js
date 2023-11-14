import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
    } else if (file.fieldname === "bookPhoto") {
      cb(null, "public/library");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + Math.floor(Math.random()) + "-" + file.originalname
    );
  },
});
export const studentMulter = multer({ storage }).single("studentPhoto");
export const libraryMulter = multer({ storage }).single("bookPhoto");
