import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import NextPage from "./NextPage";

function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/next"
        element={<NextPage />}
      />

    </Routes>
  );
}

export default App;