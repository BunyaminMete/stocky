// productModel.js

const addProduct = async (productData) => {
  console.log(productData, "Gönderilen veri:");

  try {
    // productData'yı API'nin beklediği şekle getir
    const formattedData = {
      productid: "ali",
      name: productData.name,
      category: productData.category,
      miktar: productData.miktar || 0,
      not: productData.not,
      fiyat: productData.fiyat || 0,
      create_time: "dede",
    };
    console.log(formattedData, "Biçimlendirilmiş veri:");

    const response = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData), // Düzenlenmiş veriyi gönder
    });

    if (!response.ok) {
      throw new Error("Ürün eklenirken bir hata oluştu.");
    }

    const result = await response.json();
    console.log(result, "Yanıt:");
    return result;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export default addProduct;
