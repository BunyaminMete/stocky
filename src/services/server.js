const express = require("express");
const mysql = require("mysql2");
const cors = require("cors"); // CORS middleware eklendi
const app = express();
const port = 3000;

// CORS middleware'ı kullan
app.use(cors());
app.use(express.json()); // JSON body parser middleware'ı eklendi

// MySQL bağlantı bilgileri
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // MySQL kullanıcı şifreniz
  database: "stocky", // Veritabanı adı
});

// MySQL bağlantısını test et
db.connect((err) => {
  if (err) {
    console.error("Veritabanına bağlanırken hata:", err);
    throw err;
  }
  console.log("Veritabanına bağlandı");
});

// Örnek bir GET isteği
app.get("/api/product", (req, res) => {
  // MySQL veritabanından ürünleri al
  db.query("SELECT * FROM product", (err, results) => {
    if (err) {
      console.error("Ürünler alınırken hata:", err);
      res.status(500).json({ error: "Ürünler alınırken bir hata oluştu" });
    } else {
      res.json(results);
    }
  });
});

// Örnek bir POST isteği
app.post("/api/product", (req, res) => {
  try {
    // Gelen veriyi al
    const { name, category, miktar, not, fiyat } = req.body;

    // Yeni bir ürün oluştur
    const newProduct = {
      name,
      category,
      miktar,
      not,
      fiyat,
    };

    // Veritabanına ürünü ekle
    db.query("INSERT INTO product SET ?", newProduct, (err, results) => {
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
  } catch (error) {
    console.error("Ürün eklenirken bir hata oluştu:", error.message);
    res.status(500).json({ error: "Ürün eklenirken bir hata oluştu" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
