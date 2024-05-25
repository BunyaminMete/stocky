import React, { useState } from "react";
import optionsLogo from "../../assets/options.png";
import deleteLogo from "../../assets/delete.png";
import updateLogo from "../../assets/pen.png";

const TableProduct = ({ products, productTitle }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Menüyü aç/kapat
  const toggleMenu = (productId) => {
    setOpenMenuId(openMenuId === productId ? null : productId);
  };

  // Arama terimine göre filtrelenmiş ürünleri döndür
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-title-container">{productTitle}</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Ürün adı ara..."
          value={searchTerm}
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="addButton">+ &nbsp; Ürün Ekle</button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Kategori</th>
            <th>Ürün ID</th>
            <th>Miktar</th>
            <th>Parametre 1</th>
            <th>Parametre 2</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="product-info">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="name-product">{product.name}</div>
                </div>
              </td>
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
                    onClick={() => toggleMenu(product.id)}
                  />
                  {openMenuId === product.id ? (
                    <div className="menu">
                      <div className="menu-content">
                        <img
                          src={deleteLogo}
                          alt="Delete"
                          className="menu-logo"
                        />
                        <img
                          src={updateLogo}
                          alt="Update"
                          className="menu-logo"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="menu-open">
                      <div className="menu-content">
                        <img
                          src={deleteLogo}
                          alt="Delete"
                          className="menu-logo"
                        />
                        <img
                          src={updateLogo}
                          alt="Update"
                          className="menu-logo"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableProduct;
