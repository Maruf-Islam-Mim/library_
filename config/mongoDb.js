import mongoose from "mongoose";

export const mongodbConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/school");
    console.log("Mongodb Connected success".bgCyan.black);
  } catch (error) {
    console.log(`Mongodb Connection failed ${error.message}`.bgRed.black);
  }
};
