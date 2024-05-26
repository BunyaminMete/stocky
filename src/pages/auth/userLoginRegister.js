import React, { useState } from "react";
import "./styles.css"; // CSS dosyasını içe aktarın
import accountLogo from "../../assets/account.png";
import hand from "../../assets/people2.png";
import { useAuth } from "../../context/authcontext";

const LoginRegisterForm = () => {
  const { login } = useAuth(); // setLoginResult fonksiyonunu kullanarak loginResult'u güncelleyeceğiz

  const [activeForm, setActiveForm] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      activeForm === "login"
        ? "http://localhost:3000/api/user/login"
        : "http://localhost:3000/api/user/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        // Kullanıcı bilgilerini almak için yeni bir istek yapın
        const userInfoResponse = await fetch(
          "http://localhost:3000/api/user/goruntule",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${result.token}`, // Token ekleme
            },
          }
        );

        if (userInfoResponse.ok) {
          const users = await userInfoResponse.json();
          const currentUser = users.find(
            (user) => user.username === formData.username
          );

          if (currentUser) {
            const { firstName, lastName } = currentUser;
            console.log(currentUser);
            console.log(firstName, lastName, "12312312");
            // login fonksiyonuna parametre olarak firstName ve lastName'i gönderin
            login(firstName, lastName);
            window.location.href = result.redirect;
          } else {
            console.error("Kullanıcı bulunamadı.");
          }
        } else {
          console.error(
            "Kullanıcı bilgileri alınamadı:",
            userInfoResponse.statusText
          );
        }
      } else {
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
                  name="username"
                  autoComplete="off"
                  value={formData.username}
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
                  name="password"
                  autoComplete="off"
                  value={formData.password}
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
                  width="60"
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
                  name="username"
                  autoComplete="off"
                  value={formData.username}
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
                  name="firstName"
                  autoComplete="off"
                  value={formData.firstName}
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
                  name="lastName"
                  autoComplete="off"
                  value={formData.lastName}
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
                  name="password"
                  autoComplete="off"
                  value={formData.password}
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
