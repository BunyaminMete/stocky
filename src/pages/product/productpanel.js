import React from "react";
import "./ProductManagement.css"; // Stil dosyasını ekleyin ve gerekirse düzenleyin
import GenerateHeader from "../../components/header/headerField.js";

import TableProduct from "../../components/table/table";

const ProductManagement = () => {
  // Örnek ürün verileri
  const products = [
    {
      id: 1,
      name: "Süngerbob Kalemlik",
      category: "Kategori 1",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-cow-is-looking-right-at-the-camera-image_2932326.jpg",
      quantity: 10,
      param1: "Değer 1",
      param2: "Değer 2",
    },
    {
      id: 2,
      name: "Ürün 2",
      category: "Kategori 2",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-cow-is-looking-right-at-the-camera-image_2932326.jpg",
      quantity: 20,
      param1: "Değer 3",
      param2: "Değer 4",
    },
  ];

  // Butonun açık/kapalı durumunu izlemek için bir state kullanalım

  return (
    <>
      <GenerateHeader />
      <div className="product-container">
        <div className="product-subcontainer">
          <div className="product-management-container">
            <TableProduct
              products={products}
              productTitle="Envanter Durumu (2500 Ürün) "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
