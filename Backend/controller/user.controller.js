import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // 1. Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 3. Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // 5. Success response
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
