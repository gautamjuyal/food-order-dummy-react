import CartContext from "./cart-context";

function CartProvider(props) {
  function addItemToCartHandler(item) {}

  function removeItemFromCartHandler(id) {}

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
}

export default CartProvider;
