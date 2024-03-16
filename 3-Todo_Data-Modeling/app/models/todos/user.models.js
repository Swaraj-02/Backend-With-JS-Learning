import mongoose from "mongoose";

/* -> use new keyword to access mongoose Schema({}) -imp */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, //always 1st define type
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is requierd"],
      //we can pass an array [] and send the message directly through backend
    },
  },
  { timestamps: true }
);

/* ->secondary object - timestamp[createdAt,updatedAt] build in mongoose */

/* -> Here model() method Takes two para meter model("what modal",on which basis) */
export const User = mongoose.model("User", userSchema);
