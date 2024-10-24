import React from "react";
import styles from "./Foods.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const Foods = () => {
  const [food, setFood] = useState(null);
  const [foodlist, setFoodlist] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();

        if (data && data.meals) {
          const fetchedFood = data.meals[0]; // Get the meal
          setFood(fetchedFood);
          setFoodlist((prevList) => [...prevList, fetchedFood]);
        }
      } catch (error) {
        console.error("Error fetching the food data:", error);
      }
    };
    for (let i = 0; i < 6; i++) {
      fetchFood();
    }
  }, []);
  console.log(foodlist);
  return (
    <main className={styles.foods}>
      {foodlist.map((food, index) => (
        <Card
          key={index}
          name={food.strMeal}
          image={food.strMealThumb}
          text={food.strInstructions}
          price={food.strMeasure4}
        ></Card>
      ))}
    </main>
  );
};

export default Foods;
