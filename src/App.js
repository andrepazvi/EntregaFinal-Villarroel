import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart'
<<<<<<< HEAD
import { CartProvider } from "./context/CartContext";
=======


import { CartProvider } from "./context/CartContext";

>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <BrowserRouter>
<<<<<<< HEAD
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={'Bienvenidos'} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer greeting={'Bienvenidos'} />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
=======
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={'Bienvenidos'} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting={'Bienvenidos'} />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} /> {}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
>>>>>>> 4cda5213ed9122dd84593e520d6d6e0b09c48096
          </CartProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
