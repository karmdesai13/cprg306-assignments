"use client";
import { useEffect, useState } from "react";


async function fetchMeals(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    

    async function loadMeals() {
        
            if (ingredient) {
                const mealIdeas = await fetchMeals(ingredient);
                setMeals(mealIdeas || []);
            } else {
                setMeals([]);
            }
        }
    

    useEffect(() => {
        loadMeals();
        
    }, [ingredient]);

    return (
        <div className="mt-[400px] ml-20 bg-purple-500 rounded-3xl p-10 w-[550px]">
            <h2 className="text-2xl underline m-4 text-white">Meal Ideas for {ingredient}</h2>
            <ul className="text-black rounded-xl">
                {meals && meals.map(meal => (
                    <li key={meal.idMeal} className="m-4 shadow-md p-4 font-mono shadow-black rounded-lg bg-slate-50 hover:bg-blue-500 hover:text-white hover:scale-105 transform transition duration-500 ease-in-out">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
    
}
