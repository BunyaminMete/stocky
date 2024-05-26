const mysql = require("mysql2");

// MySQL bağlantı bilgileri
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // MySQL kullanıcı şifresi
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

module.exports = db;
