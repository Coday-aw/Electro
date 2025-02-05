import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      firstName,
      lastName,
      email,
      passwordHash: hashed,
    });

    await user.save();

    const token = generateToken(user);

    res.status(201).json({
      message: "User created successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }

  const comparePassword = await bcrypt.compare(password, user.passwordHash);

  if (!comparePassword) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  res.status(200).json({
    message: "User logged in successfully",
    token: generateToken(user),
  });
};

export { createUser, loginUser };
