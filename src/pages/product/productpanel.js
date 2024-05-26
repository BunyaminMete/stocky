import React, { useState, useEffect } from "react";
import "./ProductManagement.css";
import GenerateHeader from "../../components/header/headerField.js";
import TableProduct from "../../components/table/table";
import { getAllProducts } from "../../services/productService.js"; // Controller'dan fonksiyonu içe aktar

const ProductManagement = () => {
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
  );
};

export default ProductManagement;
