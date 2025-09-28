import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    }
    // ⚠️ Don't save confirmPassword in DB
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

const User = mongoose.model("User", userSchema);

export default User;
