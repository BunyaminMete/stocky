import React from "react";
import "./container-mainpage.css";
import containerImage from "../../assets/listing-tools.png";
import productLogo from "../../assets/productlogo.png";

const MainPageContainer = () => {
  return (
    <>
      <div className="container-cover">
        <div className="container-mainpage">
          <div className="left-section">
            <div className="title-container">
              <h1 className="title">Stocky : Stok Yönetiminin Kolay Yolu</h1>
            </div>
            <div className="divider-container">
              <hr className="divider" />
            </div>
            <div className="description-container">
              <p className="description">
                Stok Ekleyin ve Güncelleyin. Stocky ile stok yönetiminizi
                kolayca halledin, envanter süreçlerinizi basitleştirin.
              </p>
            </div>
          </div>
          <div className="right-section">
            <div className="image-placeholder">
              <img
                className="container-image"
                src={containerImage}
                alt="containerimage"
              />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div>
            <div className="bottom-title">Stocky : The Best</div>
            <hr className="divider-bottom" />
            <div className="content">
              <img className="stocklogo" alt="productlogo" src={productLogo} />
              <div className="stocktext">
                &nbsp;&nbsp;
                <a href="/productmanagement">
                  Ürün Stoklarını Yönetmeye Başla!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageContainer;
