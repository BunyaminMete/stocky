const ProductModel = require("../models/productModel");

const ProductController = {
  getAllProducts: (req, res) => {
    ProductModel.getAllProducts((err, results) => {
      if (err) {
        console.error("Ürünler alınırken hata:", err);
        res.status(500).json({ error: "Ürünler alınırken bir hata oluştu" });
      } else {
        res.json(results);
      }
    });
  },

  addProduct: (req, res) => {
    const { name, category, miktar, not, fiyat } = req.body;
    const newProduct = { name, category, miktar, not, fiyat };

    ProductModel.addProduct(newProduct, (err, results) => {
      if (err) {
        console.error("Ürün eklenirken bir hata oluştu:", err);
        res.status(500).json({ error: "Ürün eklenirken bir hata oluştu" });
      } else {
        console.log("Yeni ürün başarıyla eklendi:", results.insertId);
        res.json({
          message: "Yeni ürün başarıyla eklendi",
          productId: results.insertId,
        });
      }
    });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;
    ProductModel.deleteProduct(id, (err, results) => {
      if (err) {
        console.error("Ürün silinirken bir hata oluştu:", err);
        res.status(500).json({ error: "Ürün silinirken bir hata oluştu" });
      } else {
        console.log("Ürün başarıyla silindi:", id);
        res.json({ message: "Ürün başarıyla silindi" });
      }
    });
  },

  updateProduct: (req, res) => {
    const { id } = req.params;
    const { name, category, miktar, not, fiyat } = req.body;
    const updatedProduct = { name, category, miktar, not, fiyat };

    ProductModel.updateProduct(id, updatedProduct, (err, results) => {
      if (err) {
        console.error("Ürün güncellenirken bir hata oluştu:", err);
        res.status(500).json({ error: "Ürün güncellenirken bir hata oluştu" });
      } else {
        console.log("Ürün başarıyla güncellendi:", id);
        res.json({ message: "Ürün başarıyla güncellendi" });
      }
    });
  },
};

module.exports = ProductController;
