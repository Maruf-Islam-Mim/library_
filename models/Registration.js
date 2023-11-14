import mongoose from "mongoose";

const regSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
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
// convert upercase to lowercase
regSchema.pre("save", function (next) {
  this.name = this.name.toLowerCase();
  this.email = this.email.toLowerCase();
  next();
});
// export default
export default mongoose.model("Registration", regSchema);
