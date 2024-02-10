import { Product } from "./Product/Product";
import "./Products.scss";

export const Products = ({ headingText, innerPage, products }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className={`products ${innerPage ? "innerPage" : ""}`}>
        {products?.map((product) => (
          <Product key={product.id} id={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
