import "./App.css";
import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function showCart() {
    setCartIsVisible(true);
  }

  function hideCart() {
    setCartIsVisible(false);
  }

  return (
    <CartProvider>
      {cartIsVisible && <Cart onHide={hideCart} />}
      <Header onShowCart={showCart} />
      <main className="main">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
