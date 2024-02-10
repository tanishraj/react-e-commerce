import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Products } from "../Products/Products";
import "./Category.scss";

export const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  const products = data?.data;

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products innerPage={true} products={products} />
      </div>
    </div>
  );
};
