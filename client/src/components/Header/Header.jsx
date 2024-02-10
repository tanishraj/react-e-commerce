import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { Cart } from "../Cart/Cart";
import { Search } from "./Search/Search";
import "./Header.scss";
import { Context } from "../../utils/context";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { showCart, setShowCart, searchModal, setSearchModal, cartCount } =
    useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/categories")}>Categories</li>
          </ul>
          <div className="center">JSDEVSTORE.</div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(!showCart)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(!showCart)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};
