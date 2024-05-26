const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();

router.get("/product", ProductController.getAllProducts);
router.post("/product", ProductController.addProduct);
router.delete("/product/:id", ProductController.deleteProduct); // Silme rotası eklendi
router.put("/product/:id", ProductController.updateProduct); // Güncelleme rotası eklendi

module.exports = router;
