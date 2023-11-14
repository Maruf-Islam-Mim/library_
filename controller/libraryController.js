import library from "../models/Library.js";
///
export const addBook = async (req, res) => {
  const { name } = req.body;
  let bookPhoto = null;
  if (req.file?.filename) {
    bookPhoto = req.file.filename;
  }
  const data = await library.create({
    name,
    photo: bookPhoto,
  });
  res.status(200).json(data);
};
