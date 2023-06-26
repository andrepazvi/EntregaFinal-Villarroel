import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/logo.png";

const NavBar = () => {
    return (
        <nav>
            <h3 className="ecommerce-title">Óptica</h3>
            <img src={logo} alt="Logo" className="logo-image" />
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