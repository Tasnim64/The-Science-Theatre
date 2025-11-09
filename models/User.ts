import mongoose, { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: String, required: true },
    institution: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
    thana: String,
    postalCode: String,
    fatherName: String,
    motherName: String,
    guardianContact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
