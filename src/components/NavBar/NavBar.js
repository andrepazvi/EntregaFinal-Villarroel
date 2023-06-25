import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3 className="ecommerce-title">Ecommerce</h3>
            <div className="buttons-container">
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar