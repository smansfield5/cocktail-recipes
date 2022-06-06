
import React, { useState, useEffect } from "react";


export default function RecipeIndex() {
    const [cocktail, setCocktail] = useState([]);
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((results) => results.json())
        .then((data) => {
           
            setCocktail(data.drinks);
        })
    }, []);
    return (
        <div>
            <h1>Drinks</h1>
            {cocktail.map((drink) => {
                const {
                    idDrink,
                    strDrink,
                    strCategory,
                    strDrinkThumb,
                    strInstructions
                } = drink;
                return (
                    <div key={idDrink}>
                        <h2>{strDrink}</h2>
                        <img src={strDrinkThumb} alt={strDrink}></img>
                        <h3>{strCategory}</h3>
                        <p>{strInstructions}</p>
                    </div>
                )
            })}
        </div>
    )
}