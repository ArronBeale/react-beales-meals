import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Junior Box',
    description: 'Finest chips and one piece of fried chicken',
    price: 7.99,
  },
  {
    id: 'm2',
    name: 'Snack Box',
    description: 'Finest chips and two pieces of fried chicken',
    price: 7.99,
  },
  {
    id: 'm3',
    name: 'Dinner Box',
    description: 'Finest chips and three pieces of fried chicken',
    price: 7.99,
  },
  {
    id: 'm4',
    name: 'Spice Box',
    description: 'A spicy box of chicken and chips!',
    price: 6.99,
  },
  {
    id: 'm5',
    name: 'Quarter Pounder Meal',
    description: 'Quarter pounder burger with chips + choice of drink',
    price: 9.99,
  },
  {
    id: 'm6',
    name: 'Half Pounder Meal',
    description: 'Half pounder burger with chips + choice of drink',
    price: 11.99,
  },
  {
    id: 'm7',
    name: 'Fish and Chips',
    description: 'Battered cod with chips',
    price: 6.99,
  },
  {
    id: 'm8',
    name: 'Curry Chips',
    description: 'Chips with curry sauce',
    price: 5.99,
  },
  {
    id: 'm9',
    name: 'Garlic Chips with Cheese',
    description: 'Chips with garlic sauce and cheese',
    price: 5.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
