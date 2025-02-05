import Oder from "../models/odersSchema.js";

const newOrder = async (req, res) => {
  const { products } = req.body;
  if (!products) {
    return res.status(400).json({ error: "Please select products" });
  }

  try {
    const newOrder = new Oder({
      user: req.userId,
      products,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    throw new Error(error);
  }
};

const getOders = async (req, res) => {
  try {
    const orders = await Oder.find({ user: req.userId });
    res.json(orders);
  } catch (error) {
    throw new Error(error);
  }
};

export { newOrder, getOders };
