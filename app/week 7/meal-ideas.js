"use client";
import { useEffect, useState } from "react";


export default function MealIdeas({ingredient}) {
  
    const [meals, setMeals] = useState([]);

    async function fetchMeals() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals);
    }

    useEffect(() => {
        fetchMeals();
    }, [ingredient]);


}