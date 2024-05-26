import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import ProductManagement from "../pages/product/productpanel";
import AuthForm from "../pages/auth/userLoginRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productpanel" element={<ProductManagement />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
