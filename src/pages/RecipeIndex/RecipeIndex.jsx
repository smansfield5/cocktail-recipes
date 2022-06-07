import './RecipeIndex.css'
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';


export default function RecipeIndex({handleDetails}) {
    const [cocktail, setCocktail] = useState([]);
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        .then((results) => results.json())
        .then((data) => {
           
            setCocktail(data.drinks);
        })
    }, []);

    function handleDetails() {
    Navigate('/CocktailDetailPage')    
    } 

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
                        <button type="button" onClick={() => handleDetails(idDrink)}>Details</button>
                    </div>
                )
            })}
        </div>
    )
}