// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   quantity: { type: Number, required: true },
// });

// module.exports = mongoose.model("Product", productSchema);

// // var page = 1; // Almak istediğiniz sayfa numarası
// // var pageSize = 20; // Sayfa başına maksimum belge sayısı

// // var skip = (page - 1) * pageSize; // Sayfanın başlangıç indisini hesaplayın

// // var axios = require("axios");
// // var data = JSON.stringify({
// //   collection: "users",
// //   database: "sample_mflix",
// //   dataSource: "stockyenvanter",
// //   filter: {},
// //   projection: {
// //     _id: 1,
// //     name: 1,
// //     email: 1,
// //     password: 1,
// //   },
// //   sort: {
// //     _id: 1,
// //   },
// //   limit: pageSize,
// //   skip: skip,
// // });

// // var config = {
// //   method: "post",
// //   url: "https://eu-central-1.aws.data.mongodb-api.com/app/data-zwsmlgy/endpoint/data/v1/action/find",
// //   headers: {
// //     "Content-Type": "application/json",
// //     "api-key":
// //       "o3cGDkloa8GSD2KI5q7csRF5BB3PiTSXCYxZniXHdADBXhD8aNpxgWRGW3W7oTUj",
// //     Accept: "application/ejson",
// //   },
// //   data: data,
// // };

// // axios(config)
// //   .then(function (response) {
// //     const documents = response.data.documents;
// //     if (documents.length > 0) {
// //       console.log("Kullanıcılar:");
// //       documents.forEach(function (user) {
// //         console.log(user);
// //       });
// //     } else {
// //       console.log("Kullanıcı bulunamadı.");
// //     }
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });
