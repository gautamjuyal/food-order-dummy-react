import "./MealComponent.css";
import MealItemForm from "./MealItemForm";

function MealComponent(props) {
  const price = `$${props.price}`;
  return (
    <li className="meal-component">
      <div className="details">
        <div className="name">{props.name}</div>
        <div className="desc">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div className="form">
        <MealItemForm />
      </div>
    </li>
  );
}

export default MealComponent;
