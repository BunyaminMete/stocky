import React, { useState } from "react";

import logomenu from "../../assets/menuicon.png"
import stockylogo from "../../assets/stockylogo.png"
import MainPageContainer from "../mainpagecontainer/container-mainpage";

import "./headerField.css";

const GenerateHeader = React.memo(() => {
  const [isLogin, setLogin] = useState("true");
  const [activeUserName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  // FOR TESTING*****************************************
  // const showUser = () => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       // Kullanıcı oturum açmış durumda
  //       const uid = user.uid;
  //       alert(uid);
  //     } else {
  //       // Kullanıcı oturum açmamış durumda
  //       alert("Kullanıcı oturum açmamış.");
  //     }
  //   });
  // };

//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       setLogin("true");
//       const userId = user.uid;
//       setUserID(userId);
//       const userRef = firebase.firestore().collection("users").doc(userId);
//       userRef.get().then((doc) => {
//         if (doc.exists) {
//           const userData = doc.data();
//           const fullName = userData.firstName + ` ` + userData.lastName;
//           setUserName(fullName);
//         }
//       });
//     } else {
//       setLogin("");
//       setUserName("");
//     }
//   });

//   const handleLogout = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         // Oturumu kapatıldı, gerektiğinde kullanıcıyı yönlendirin veya başka bir işlem yapın
//         console.log("Kullanıcı başarıyla çıkış yaptı.");
//         // Örneğin, kullanıcıyı ana sayfaya yönlendirebilirsiniz
//         window.location.href = "/";
//       })
//       .catch((error) => {
//         console.error("Kullanıcı çıkış yaparken bir hata oluştu:", error);
//       });
//   };

  return (
      <>
    <div className="header">
      <div className="top">
          <br />
        <div className="logo2-container">
          <a href="/" className="logo2">
            <img
            className="stocky"
            src={stockylogo}
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="right-wrapper">
          <div className="app-name-wrapper">
        

            <div className="app-name">
                  &nbsp;&nbsp;
                  <a className="app-name-link" href="/login">
                    GİRİŞ YAP
                  </a>
                  
                </div>

            {/* {isLogin ? (
              <>
                <div onClick={handleLogout} className="app-name">
                  &nbsp;&nbsp; Çıkış yap
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
                  <a className="app-name-link" href="/register">
                    Kayıt Ol
                  </a>
                </div>
              </>
            )} */}
          </div>
          <div className="profile-pic">
            <div className="picture"></div>
            {activeUserName && (
              <div className="profile-name">{activeUserName}</div>
            )}
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
            >
              
            </img>
              <div className="dropdown-content">
                <a className="app-name-link" href="/formpage">
                  Giriş Yap
                </a>
                <a className="app-name-link" href="/formpage">
                  Kayıt Ol
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    <MainPageContainer />
    </>
  );
});

export default GenerateHeader;