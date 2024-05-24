import React, { useState } from "react";
import "./ProductManagement.css"; // Stil dosyasını ekleyin ve gerekirse düzenleyin

import optionsLogo from "../../assets/options.png";

const ProductManagement = () => {
  // Örnek ürün verileri
  const products = [
    {
      id: 1,
      name: "Süngerbob Kalemlik",
      category: "Kategori 1",
      image: "image1.jpg",
      quantity: 10,
      param1: "Değer 1",
      param2: "Değer 2",
    },
    {
      id: 2,
      name: "Ürün 2",
      category: "Kategori 2",
      image: "image2.jpg",
      quantity: 20,
      param1: "Değer 3",
      param2: "Değer 4",
    },
  ];

  // Butonun açık/kapalı durumunu izlemek için bir state kullanalım
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  // Butona tıklandığında durumu değiştirelim
  const toggleButton = () => {
    setIsButtonOpen(!isButtonOpen);
  };

  return (
    <div className="product-management-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Ürün</th> {/* İlk sütunun adını değiştirin */}
            <th>Kategori</th>
            <th>Ürün ID</th>
            <th>Miktar</th>
            <th>Parametre 1</th>
            <th>Parametre 2</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="product-info">
                  <div className="product-image-container">
                    <img
                      src="https://img.pixers.pics/pho_wat(s3:700/FO/52/98/66/38/700_FO52986638_0b48f09e682cf9413c8586d0b8b4187e.jpg,700,639,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,589,jpg)/cikartmalar-gazania-tek-cicek-splendens-cinsi-asteraceae-isolated.jpg.jpg"
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="name-product">{product.name}</div>
                </div>
              </td>
              {/* İlk sütun için resim ve ürün adını içeren bir div oluşturun */}
              <td>{product.category}</td>
              <td>{product.id}</td>
              <td>{product.quantity}</td>
              <td>{product.param1}</td>
              <td>{product.param2}</td>
              <td>
                <div className="options">
                  <img
                    src={optionsLogo}
                    alt="Options"
                    width={40}
                    className="options-logo"
                    onClick={toggleButton}
                  />
                  {/* Butonun açık/kapalı durumuna göre render edelim */}
                  {isButtonOpen && (
                    <div className="button-container">
                      <button className="button">Delete Item</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
