import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage";
import ProductManagement from "../pages/product/productpanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productpanel" element={<ProductManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
