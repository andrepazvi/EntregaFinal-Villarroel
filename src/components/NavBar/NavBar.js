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
        <NavLink to="/category/sol" onClick={handleLensCategoryClick}>
          <button>Lentes de Sol</button>
        </NavLink>
        <NavLink to="/category/opticos" onClick={handleLensCategoryClick}>
          <button>Lentes ópticos</button>
        </NavLink>
        <NavLink to="/category/contacto" onClick={handleOtherCategoryClick}>
          <button>Lentes de contacto</button>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;