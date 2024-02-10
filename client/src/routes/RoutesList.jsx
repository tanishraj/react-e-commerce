import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Category } from "../components/Category/Category";
import { SingleProduct } from "../components/SingleProduct/SingleProduct";
import { Cart } from "../components/Cart/Cart";

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
