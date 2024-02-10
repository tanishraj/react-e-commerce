import { useEffect, useContext } from "react";
import { Banner } from "./Banner/Banner";
import { Category } from "./Category/Category";
import { Products } from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import "./Home.scss";

export const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  const getProducts = async () => {
    const { data } = await fetchDataFromApi("/api/products?populate=*");
    setProducts(data);
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};
