import mongoose from "mongoose";

const loginSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// export default
export default mongoose.model("login", loginSchema);
