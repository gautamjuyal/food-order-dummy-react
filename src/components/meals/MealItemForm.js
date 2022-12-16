import "./MealItemForm.css";

function MealItemForm() {
  return (
    <form className="meal-item-form">
      <button className="minus">-</button>
      <span>0</span>
      <button className="plus">+</button>
    </form>
  );
}

export default MealItemForm;
