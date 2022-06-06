import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Paneer Tikka',
      description: 'Finest paneer and veggies',
      price: 199,
    },
    {
      id: 'm2',
      name: 'Chicken Biriyani',
      description: 'A Hyderabadi specialty!',
      price: 359,
    },
    {
      id: 'm3',
      name: 'Aloo tikki Burger',
      description: 'Blend of Indian Spices',
      price: 49,
    },
    {
      id: 'm4',
      name: 'McVeggie Pizza',
      description: 'Healthy...and green...',
      price: 699,
    },
  ];
const AvailableMeals = () => 
{  const Mealslist=DUMMY_MEALS.map( (meal) => <MealItem key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
/> );
  return (
  <section className={classes.meals}>
  <Card>
      <ul>
          {Mealslist}
      </ul>
      </Card>
  </section>
  )
}

export default AvailableMeals;