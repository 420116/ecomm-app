import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Header.css";
import CartButton from "./CartButton";

function Header(props) {
  const [click, setClick] = useState(false);
  const handleClickFn = () => {
    setClick(!click);
  };

  const [button, setButton] = useState(false);
  //const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    setButton(!(window.innerWidth <= 960));
  };

  useEffect(() => {
    showButton(true);
  }, [button]);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink className="navbar-logo" to="/">
              Shopping Cart
            </NavLink>
            <div className="menu-icon" onClick={handleClickFn}>
              <CartButton toggleCart={props.showCart} />
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-links">
                  Login
                </NavLink>
              </li>
              {button && <CartButton toggleCart={props.showCart} />}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
