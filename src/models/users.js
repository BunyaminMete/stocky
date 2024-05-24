// // mysql2 modülünü yükleyin
// const mysql = require("mysql2");

// // MySQL veritabanına bağlanmak için gerekli bilgiler
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "m4ykon3",
// });

// // Veritabanına bağlanın
// connection.connect(function (err) {
//   if (err) {
//     console.error("Veritabanına bağlanırken hata oluştu: " + err.stack);
//     return;
//   }
//   console.log("MySQL veritabanına bağlandı.");
// });

// // Verileri almak için sorguyu oluşturun
// const sql = "SELECT * FROM users";

// // Sorguyu yürütün
// connection.query(sql, function (err, results, fields) {
//   if (err) {
//     console.error("Sorguyu çalıştırırken hata oluştu: " + err.stack);
//     return;
//   }
//   console.log("Sorgu sonuçları:", results);
// });

// // Bağlantıyı kapatın
// connection.end(function (err) {
//   if (err) {
//     console.error("Bağlantıyı kapatırken hata oluştu: " + err.stack);
//     return;
//   }
//   console.log("MySQL veritabanı bağlantısı kapatıldı.");
// });
