const mysql = require("mysql2");

// MySQL bağlantı bilgileri
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stocky",
});

// MySQL bağlantısını test et
db.connect((err) => {
  if (err) {
    console.error("Veritabanına bağlanırken hata:", err);
    throw err;
  }
  console.log("Veritabanına bağlandı");
});

const ProductModel = {
  getAllProducts: (callback) => {
    db.query("SELECT * FROM product", callback);
  },

  addProduct: (productData, callback) => {
    db.query("INSERT INTO product SET ?", productData, callback);
  },

  deleteProduct: (productId, callback) => {
    db.query("DELETE FROM product WHERE productid = ?", [productId], callback);
  },

  updateProduct: (productId, productData, callback) => {
    db.query(
      "UPDATE product SET ? WHERE productid = ?",
      [productData, productId],
      callback
    );
  },
};

module.exports = ProductModel;
