import mongoose from "mongoose";

const studetentSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Custom"],
  },
  call: {
    type: String,
    trim: true,
    unique: true,
  },
  book: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "libraryModel",
    default: null,
  },
  photo: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// export default
export default mongoose.model("student", studetentSchema);
