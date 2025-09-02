import jwt from 'jsonwebtoken';

// Main Admin Login
export const loginMainAdmin = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Check against .env values instead of DB
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
