import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate token + save in cookie
    createTokenAndSaveCookie(newUser._id, res);

    // Success response
    res.status(201).json({ message: "User registered successfully", newUser });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
