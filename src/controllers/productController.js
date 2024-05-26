const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/product");
    if (!response.ok) {
      throw new Error("Ürünler alınırken bir hata oluştu.");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
};

export default getAllProducts;

// const Product = require("../models/Product");

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createProduct = async (req, res) => {
//   const product = new Product({
//     name: req.body.name,
//     quantity: req.body.quantity,
//   });

//   try {
//     const newProduct = await product.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product == null) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     product.name = req.body.name || product.name;
//     product.quantity = req.body.quantity || product.quantity;
//     const updatedProduct = await product.save();
//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product == null) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     await product.remove();
//     res.json({ message: "Product deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
