import Product from "../models/productSchema.js";

const createProduct = async (req, res) => {
  const { name, price, description, category, images } = req.body;

  if (!name || !price || !description || !category || !images) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      images,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createProduct, getProducts, getProductById };
