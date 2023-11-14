import student from "../models/Student.js";
/**
 * @description Registration
 * @Route /api/v1/registration
 * @Method post
 * @access PUBLIC
 */
export const getAllData = async (req, res) => {
  const data = await student.find().populate("book");
  res.status(200).json(data);
};
// add student
export const addStudent = async (req, res) => {
  const { name, age, depertment, roll, book, call, gender } = req.body;
  let studentPhoto = null;
  if (req.file?.filename) {
    studentPhoto = req.file.filename;
  }
  const data = await student.create({
    name,
    age,
    class: depertment,
    roll,
    book,
    gender,
    call,
    photo: studentPhoto,
  });
  res.status(200).json(req.body);
};
// get single data
export const singleData = async (req, res) => {
  const { id } = req.params;
  const data = await student.findById(id);
  res.status(200).json(data);
};
// edit student data
export const editData = async (req, res) => {
  const { id } = req.params;
  const data = await student.findByIdAndUpdate(
    id,
    {
      book: [
        "654fa4eb7d40eeb92fcd7ff9",
        "654fa39aa339ee336af2754d",
        "654fa38aa339ee336af2754b",
      ],
    },
    { new: true }
  );
  res.status(200).json(data);
};
