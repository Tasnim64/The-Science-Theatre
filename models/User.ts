// /models/User.ts
import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  dob: { type: String, required: true }, // store as string "YYYY-MM-DD" or DD/MM/YYYY if you prefer
  institution: { type: String, required: true, trim: true },
  gender: { type: String, required: true },
  address: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  thana: { type: String, trim: true },
  postalCode: { type: String, trim: true },
  fatherName: { type: String, trim: true },
  motherName: { type: String, trim: true },
  guardianContact: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = models.User || model("User", UserSchema);
export default User;
