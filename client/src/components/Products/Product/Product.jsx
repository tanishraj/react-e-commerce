import { useNavigate } from "react-router-dom";
import "./Product.scss";

export const Product = ({ product, id }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={`${process.env.REACT_APP_STRIPE_APP_DEV_URL}${product?.attributes?.image?.data?.[0]?.attributes?.url}`}
          alt={
            product?.attributes?.image?.data?.[0]?.attributes?.alternativeText
          }
        />
      </div>
      <div className="prod-details">
        <span className="name">{product?.attributes?.title}</span>
        <span className="price">&#8377; {product?.attributes?.price}</span>
      </div>
    </div>
  );
};
