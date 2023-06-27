import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/logo.png";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo-image" />
            <h3 className="ecommerce-title">Óptica Crisan</h3>
            <div className="buttons-container">
                <button>Lentes de sol</button>
                <button>Lentes de Contacto</button>
                <button>Lentes ópticos</button>
            </div>
            <CartWidget/>
        </nav>

        
    )
}



export default NavBar