import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo-image" />
      <h3 className="ecommerce-title">Óptica Crisan</h3>
      <div className="buttons-container">
      <NavLink to="/category/4"> <button>Lentes de Sol</button> </NavLink>
      <NavLink to="/category/2"> <button>Lentes de contacto</button> </NavLink>
      <NavLink to="/category/3"> <button>Lentes ópticos</button> </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;