import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider"; //context
import { auth } from "./firebase";
function Header() {
  const [{ basket }] = useStateValue(); //context
  const [{ user }] = useStateValue(); //context
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">

        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header_option">
            <span className="header__optionLineOne">{user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        
        <Link to="/checkout" className="header__link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
