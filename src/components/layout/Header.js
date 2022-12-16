import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <>
      <header className="header">
        <h1>React Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="header-bottom">
        <img src={mealsImage} alt="food"></img>
      </div>
    </>
  );
}

export default Header;
