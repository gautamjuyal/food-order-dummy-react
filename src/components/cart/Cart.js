import "./Cart.css";

const CART_ITEMS = [{ name: "sushi", price: 33 }];

function Cart(props) {
  const renderedCartItems = CART_ITEMS.map((item) => (
    <li className="cart-item">
      <span>{item.name} </span>
      <span>$ {item.price} </span>
    </li>
  ));

  return (
    <>
      <div className="backdrop" onClick={props.onHide}></div>
      <div className="cart-container">
        <div className="cart">
          <ul className="cart-list">{renderedCartItems}</ul>
          <div className="total">
            <span>Total Order Value</span>
            <span>$232</span>
          </div>
          <div className="actions">
            <button className="cancel" onClick={props.onHide}>
              Cancel
            </button>
            <button className="order">Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
