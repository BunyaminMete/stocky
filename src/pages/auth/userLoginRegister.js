import React, { useState } from "react";
import "./styles.css"; // CSS dosyasını içe aktarın
import accountLogo from "../../assets/account.png";
import hand from "../../assets/people2.png";

const LoginRegisterForm = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [formData, setFormData] = useState({
    kullanici_adi: "",
    sifre: "",
    email: "",
    ad: "",
    soyad: "",
  });

  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = activeForm === "login" ? "/api/login" : "/api/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Giriş veya kayıt başarılı
        const result = await response.json();
        console.log(result);
      } else {
        // Hata durumu
        console.error("Hata:", response.statusText);
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="loginRegisterContainer">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 login-card">
          <img src={hand} alt="" className="handlogo" />
          {activeForm === "login" && (
            <form id="login-form" className="col-lg-12" onSubmit={handleSubmit}>
              <div className="col-lg-12 logo-kapsul">
                <img
                  width="200"
                  className="logo"
                  src={accountLogo}
                  alt="RadKod Logo"
                  draggable="false"
                />
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="group">
                <input
                  type="text"
                  name="kullanici_adi"
                  autoComplete="off"
                  value={formData.kullanici_adi}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <i className="material-icons input-ikon">person_outline</i>
                  <span className="span-input">Kullanıcı Adınız</span>
                </label>
              </div>
              <div className="group">
                <input
                  type="password"
                  name="sifre"
                  autoComplete="off"
                  value={formData.sifre}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <i className="material-icons input-sifre-ikon">lock</i>
                  <span className="span-input">Şifre</span>
                </label>
              </div>
              <button type="submit" className="giris-yap-buton">
                Giriş Yap
              </button>
              <div className="forgot-and-create tab-menu">
                <button
                  type="button"
                  className="hesap-olustur-link"
                  onClick={() => handleFormChange("register")}
                >
                  Hesap Oluştur.
                </button>
              </div>
            </form>
          )}
          {activeForm === "register" && (
            <form id="kayit-form" className="col-lg-12" onSubmit={handleSubmit}>
              <div className="col-lg-12 logo-kapsul">
                <img
                  width="200"
                  className="logo"
                  src={accountLogo}
                  alt="RadKod Logo"
                  draggable="false"
                />
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="group">
                <input
                  type="text"
                  name="kullanici_adi"
                  autoComplete="off"
                  value={formData.kullanici_adi}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <i className="material-icons input-ikon">person_outline</i>
                  <span className="span-input">Kullanıcı Adınız</span>
                </label>
              </div>
              <div className="group">
                <input
                  type="text"
                  name="ad"
                  autoComplete="off"
                  value={formData.ad}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <span className="span-input">Ad</span>
                </label>
              </div>
              <div className="group">
                <input
                  type="text"
                  name="soyad"
                  autoComplete="off"
                  value={formData.soyad}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <span className="span-input">Soyad</span>
                </label>
              </div>
              <div className="group">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <i className="material-icons input-ikon">mail_outline</i>
                  <span className="span-input">E-Mail</span>
                </label>
              </div>
              <div className="group">
                <input
                  type="password"
                  name="sifre"
                  autoComplete="off"
                  value={formData.sifre}
                  onChange={handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  <i className="material-icons input-sifre-ikon">lock</i>
                  <span className="span-input">Şifre</span>
                </label>
              </div>
              <button type="submit" className="kayit-ol-buton">
                Kayıt Ol
              </button>
              <button
                type="button"
                className="zaten-hesap-var-link"
                onClick={() => handleFormChange("login")}
              >
                Zaten Bir Hesabınız Var mı? Giriş Yapın.
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginRegisterForm;
