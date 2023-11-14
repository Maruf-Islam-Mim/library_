import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    default: null,
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// export default
export default mongoose.model("library", librarySchema);
