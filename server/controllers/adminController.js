import jwt from "jsonwebtoken";
import TurfAdmin from "../models/turfAdmin.js";

// Main Admin Login
export const loginMainAdmin = async (req, res) => {
  const { name, password } = req.body;

  try {
    if (
      name === process.env.MAIN_ADMIN_NAME &&
      password === process.env.MAIN_ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { name, role: "main-admin" },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      return res.json({ token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTurfAdmin = async (req, res) => {
  const { name, password, phone } = req.body;

  try {
    const turfAdmin = await TurfAdmin.create({ name, password, phone });
    res.status(201).json(turfAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// List Turf Admins
export const getTurfAdmins = async (req, res) => {
  try {
    const admins = await TurfAdmin.find({});
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
