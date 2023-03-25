import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Snack Box',
    description: 'Finest chips and fried chicken',
    price: 7.99,
  },
  {
    id: 'm2',
    name: 'Spice Box',
    description: 'A spicy box of chicken and chips!',
    price: 6.99,
  },
  {
    id: 'm3',
    name: 'Quarter Pounder Meal',
    description: 'Quarter pounder burger with chips + choice of drink',
    price: 9.99,
  },
  {
    id: 'm4',
    name: 'Fish and Chips',
    description: 'Battered cod with chips',
    price: 6.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
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
