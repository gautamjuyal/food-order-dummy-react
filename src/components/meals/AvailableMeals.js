import "./AvailableMeals.css";
import MealComponent from "./MealComponent";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "sushi",
    description: "finest sushi in town",
    price: 22.9,
  },
  {
    id: "m2",
    name: "pizza",
    description: "hand tossed pizzas at affordable price",
    price: 22.9,
  },
  {
    id: "m3",
    name: "fries",
    description: "crispy fries made with fresh potatoes",
    price: 22.9,
  },
];

function AvailableMeals() {
  const availMeals = DUMMY_MEALS.map((meal) => (
    <MealComponent
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="available-meals">
      <ul className="meals-list">{availMeals}</ul>
    </section>
  );
}

export default AvailableMeals;
