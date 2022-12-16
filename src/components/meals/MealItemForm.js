import "./MealItemForm.css";
import { useState } from "react";

function MealItemForm() {
  const [mealUnits, setMealUnits] = useState(1);

  function increaseMealAmount(e) {
    e.preventDefault();
    if (mealUnits === 10) return;
    setMealUnits((prev) => prev + 1);
  }

  function decreaseMealAmount(e) {
    e.preventDefault();
    if (mealUnits === 0) return;
    setMealUnits((prev) => prev - 1);
  }

  return (
    <form className="meal-item-form">
      <button className="minus" onClick={decreaseMealAmount}>
        -
      </button>
      <span>{mealUnits}</span>
      <button className="plus" onClick={increaseMealAmount}>
        +
      </button>
    </form>
  );
}

export default MealItemForm;
