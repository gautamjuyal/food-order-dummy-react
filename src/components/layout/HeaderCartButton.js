import "./HeaderCartButton.css";
import CartIcon from "../cart/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className="header-cart-button" onClick={props.onClick}>
      <span className="cart-icon">{CartIcon}</span>
      <span className="label">Cart</span>
      <span className="count">3</span>
    </button>
  );
}

export default HeaderCartButton;
