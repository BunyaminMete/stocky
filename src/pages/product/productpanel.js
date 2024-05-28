import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authcontext.js";
import { getAllProducts } from "../../services/productService.js"; // Controller'dan fonksiyonu içe aktar

import GenerateHeader from "../../components/header/headerField.js";
import TableProduct from "../../components/table/table";
import "./ProductManagement.css";

import gif404 from "../../assets/404.gif";

const ProductManagement = () => {
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ürünleri API'den almak için useEffect içindeki fonksiyon
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts(); // Tüm ürünleri almak için controller'daki fonksiyonu çağır
        setProducts(productsData);
      } catch (error) {
        console.error("Ürünleri alırken bir hata oluştu:", error.message);
      }
    };

    fetchProducts(); // Sayfa yüklendiğinde ürünleri almak için useEffect içinde çağır
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          <GenerateHeader />
          <div className="product-container">
            <div className="product-subcontainer">
              <div className="product-management-container">
                <TableProduct
                  products={products}
                  productTitle="Envanter Durumu (2500 Ürün)"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="gif-container">
            <div className="gif-subcontainer">
              <img id="gif" src={gif404} alt="pagenotfound"></img>
              <br />
              <div className="returnmainbutton">
                <button onClick={() => (window.location.href = "/")}>
                  Ana Sayfaya Geri Dön!
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductManagement;
