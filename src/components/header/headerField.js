import React from "react";
import { useAuth } from "../../context/authcontext";

import logomenu from "../../assets/menuicon.png";
import stockylogo from "../../assets/stockylogo.png";

import "./headerField.css";

const GenerateHeader = React.memo(() => {
  const { isLoggedIn, logout, firstName, lastName } = useAuth(); // AuthContext'ten loginResult değerini al

  console.log(isLoggedIn);

  return (
    <>
      <div className="header">
        <div className="top">
          <br />
          <div className="logo2-container">
            <a href="/" className="logo2">
              <img className="stocky" src={stockylogo} alt="logo"></img>
            </a>
          </div>
          <div className="right-wrapper">
            <div className="app-name-wrapper">
              {isLoggedIn ? (
                <>
                  <div onClick={logout} className="app-name">
                    &nbsp;&nbsp;{" "}
                    <a className="app-name-link" href="/login">
                      Çıkış yap
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="app-name">
                    &nbsp;&nbsp;
                    <a className="app-name-link" href="/login">
                      Giriş yap
                    </a>
                    &nbsp;&nbsp; / &nbsp;&nbsp;
                    <a className="app-name-link" href="/login">
                      Kayıt Ol
                    </a>
                  </div>
                </>
              )}
            </div>
            <div className="profile-pic">
              <div className="picture"></div>
              {/* {activeUserName && (
                <div className="profile-name">{activeUserName}</div>
              )} */}
              <div className="profile-name">
                {firstName.toUpperCase()} {lastName.toUpperCase()}
              </div>
            </div>
            <div className="dropdown">
              <img
                src={logomenu}
                className="app-menu"
                width="35px"
                height="35px"
                viewBox="0 0 26.75 26.75"
                fill="#fff"
                alt="menu icon"
              ></img>
              {isLoggedIn && (
                <div className="dropdown-content">
                  <a className="app-name-link" href="/productpanel">
                    Panel
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default GenerateHeader;
