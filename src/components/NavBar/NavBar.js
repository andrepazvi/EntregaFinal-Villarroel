import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/logo.png";
import { NavLink } from "react-router-dom";
import TituloPrincipal from "../TituloPrincipal/TituloPrincipal";
import { Link } from 'react-router-dom';

const NavBar = ({ setShowItemCount }) => {
  const handleLensCategoryClick = () => {
    setShowItemCount(true);
  };

  const handleOtherCategoryClick = () => {
    setShowItemCount(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <TituloPrincipal saludo={"Óptica Crisan"} />
      </Link>
      <img src={logo} alt="Logo" className="logo-image" />
      <div className="buttons-container">
        <NavLink to="/category/1" onClick={handleLensCategoryClick}>
          <button>Lentes de Sol</button>
        </NavLink>
        <NavLink to="/category/2" onClick={handleLensCategoryClick}>
          <button>Lentes de contacto</button>
        </NavLink>
        <NavLink to="/category/3" onClick={handleOtherCategoryClick}>
          <button>Lentes ópticos</button>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
