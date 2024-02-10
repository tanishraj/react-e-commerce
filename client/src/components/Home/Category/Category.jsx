import { useNavigate } from "react-router-dom";
import "./Category.scss";

export const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.map((category) => (
          <div
            className="category"
            key={category?.id}
            onClick={() => navigate(`/category/${category?.id}`)}
          >
            <img
              src={`${process.env.REACT_APP_STRIPE_APP_DEV_URL}${category?.attributes?.image?.data?.attributes?.url}`}
              alt={
                category?.attributes?.image?.data?.attributes?.alternativeText
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
