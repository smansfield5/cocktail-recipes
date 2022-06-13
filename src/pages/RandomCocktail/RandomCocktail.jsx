import React, { useState, useEffect } from "react";
import './RandomCocktail.css';

export default function RandomCocktail() {
    const [cocktail, setCocktail] = useState([]);
    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
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
                    strMeasure1,
                    strInstructions,
                    strIngredient
                } = drink;
                return (
                    <div className="Container" key={idDrink}>
                        <img src={strDrinkThumb} alt={strDrink}></img>
                        <br /><br />
                        <div className="RandomCocktailPage"> 
                            <h2>{strDrink}</h2>
                            <h3>{strIngredient}</h3>
                            <h3>{strCategory}</h3>
                            <h3>{strMeasure1}</h3>
                            <p>{strInstructions}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}