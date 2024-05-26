const getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Ürünler alınırken bir hata oluştu.");
    }

    const products = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
};

const addProduct = async (productData) => {
  console.log(productData, "Gönderilen veri:");

  try {
    const response = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Ürün eklenirken bir hata oluştu.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Ürün silinirken bir hata oluştu.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId, productData) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/product/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );

    if (!response.ok) {
      throw new Error("Ürün güncellenirken bir hata oluştu.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export { addProduct, deleteProduct, updateProduct, getAllProducts };
