import React, { useState, useEffect } from "react";
import optionsLogo from "../../assets/options.png";
import deleteLogo from "../../assets/delete.png";
import updateLogo from "../../assets/pen.png";
import {
  addProduct,
  deleteProduct,
  updateProduct,
  getAllProducts, // <--- Tüm ürünleri getiren bir fonksiyon eklendi
} from "../../services/productService";

const TableProduct = ({ productTitle }) => {
  const [products, setProducts] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [product, setProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    miktar: 0,
    not: "",
    fiyat: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts(); // Tüm ürünleri getir
      setProducts(products); // Durumu güncelle
    } catch (error) {
      console.error("Ürünleri getirirken bir hata oluştu:", error.message);
    }
  };

  const addProductHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await addProduct(formData);
      console.log("Yeni ürün eklendi:", result);
      console.log(formData, "eklenen şey ve türü", typeof formData);
      // İsteğin başarılı olduğuna dair bir mesaj gösterebilirsiniz
      // Ürünlerin yeniden getirilmesini tetikle
      fetchProducts();
    } catch (error) {
      console.error("Ürün eklenirken bir hata oluştu:", error.message);
      // Hata durumunda kullanıcıya bir hata mesajı gösterebilirsiniz
    }
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      console.log("Ürün başarıyla silindi:", productId);
      // Ürünlerin yeniden getirilmesini tetikle
      fetchProducts();
    } catch (error) {
      console.error("Ürün silinirken bir hata oluştu:", error.message);
    }
  };

  const handleUpdateProduct = async (productId, updatedData) => {
    console.log(productId);
    try {
      await updateProduct(productId.productid, updatedData);
      console.log("Ürün başarıyla güncellendi:", productId);
      // Ürünlerin yeniden getirilmesini tetikle
      fetchProducts();
    } catch (error) {
      console.error("Ürün güncellenirken bir hata oluştu:", error.message);
    }
  };

  // Menüyü aç/kapat
  const toggleMenu = (productId) => {
    setOpenMenuId(openMenuId === productId ? null : productId);
  };

  // Formu aç/kapat
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleUpdateForm = (getproduct) => {
    setIsUpdateFormOpen(!isUpdateFormOpen);
    setProduct(getproduct);
    console.log(getproduct, "bak");
  };

  // Arama terimine göre filtrelenmiş ürünleri döndür
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Form alanlarındaki değerleri güncelle
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form gönderimini işle
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Burada form gönderimini işleyebilirsiniz, örneğin ürünü veritabanına ekleyebilirsiniz
    console.log("Form submitted:", formData);
    // Formu kapat
    setIsFormOpen(false);
  };

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
        <button className="addButton" onClick={toggleForm}>
          + &nbsp; Ürün Ekle
        </button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Kategori</th>
            <th>Ürün ID</th>
            <th>Stok</th>
            <th>Not</th>
            <th>Fiyat</th>
            <th>&nbsp;</th>
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
                      alt=" "
                      className="product-image"
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="name-product">{product.name}</div>
                </div>
              </td>
              <td>{product.category}</td>
              <td>{product.productid}</td>
              <td>{product.miktar}</td>
              <td>{product.not}</td>
              <td>{product.fiyat}</td>
              <td>
                <div className="options">
                  <img
                    src={optionsLogo}
                    alt="Options"
                    width={40}
                    className="options-logo"
                    onClick={() => toggleMenu(product.productid)}
                  />
                  {openMenuId === product.productid ? (
                    <div className="menu">
                      <div className="menu-content">
                        <img
                          src={deleteLogo}
                          alt="Delete"
                          onClick={() => handleDelete(product.productid)}
                          className="menu-logo"
                        />
                        <img
                          src={updateLogo}
                          alt="Update"
                          onClick={() => toggleUpdateForm(product)}
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

      <div
        className="overlay"
        style={{ display: isUpdateFormOpen ? "block" : "none" }}
      ></div>

      {isUpdateFormOpen && (
        <div className="product-form">
          <h2>
            Ürün Güncelle
            <img
              onClick={() => toggleUpdateForm()}
              className="dellogo"
              src={deleteLogo}
              alt="del"
              width={40}
            />
          </h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Ürün Adı:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="category">Kategori:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />

            <label htmlFor="miktar">Stok Miktarı:</label>
            <input
              type="number"
              id="miktar"
              name="miktar"
              value={formData.miktar}
              onChange={handleInputChange}
            />

            <label htmlFor="not">Not</label>
            <input
              type="text"
              id="not"
              name="not"
              value={formData.not}
              onChange={handleInputChange}
            />

            <label htmlFor="fiyat">Fiyat</label>
            <input
              type="text"
              id="fiyat"
              name="fiyat"
              value={formData.fiyat}
              onChange={handleInputChange}
            />

            <button
              onClick={() => handleUpdateProduct(product, formData)}
              type="submit"
            >
              Ürünü Güncelle
            </button>
          </form>
        </div>
      )}

      <div
        className="overlay"
        style={{ display: isFormOpen ? "block" : "none" }}
      ></div>

      {isFormOpen && (
        <div className="product-form">
          <h2>
            Ürün Ekle
            <img
              onClick={() => toggleForm()}
              className="dellogo"
              src={deleteLogo}
              alt="del"
              width={40}
            />
          </h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Ürün Adı:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="category">Kategori:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />

            <label htmlFor="miktar">Stok Miktarı:</label>
            <input
              type="number"
              id="miktar"
              name="miktar"
              value={formData.miktar}
              onChange={handleInputChange}
            />

            <label htmlFor="not">Not</label>
            <input
              type="text"
              id="not"
              name="not"
              value={formData.not}
              onChange={handleInputChange}
            />

            <label htmlFor="fiyat">Fiyat</label>
            <input
              type="text"
              id="fiyat"
              name="fiyat"
              value={formData.fiyat}
              onChange={handleInputChange}
            />

            <button onClick={addProductHandler} type="submit">
              Ürünü Ekle
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default TableProduct;
