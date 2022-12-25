import { Meal } from './Meal';

function MealList({ meals }: any) {
    return (
        <div className='list'>
            {meals.map((meal: any) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}
export { MealList };
