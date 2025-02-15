import Message from "../models/messageSchema.js";

const createMessage = async (req, res) => {
  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "please fill all fields" });
  }

  try {
    const NewMessage = await Message.create({
      fullName,
      email,
      message,
    });
    res.status(201).json(NewMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createMessage };
