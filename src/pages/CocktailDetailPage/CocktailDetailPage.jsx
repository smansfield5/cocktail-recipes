import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import * as drinksAPI from '../../utilities/drinks-api'

export default function CocktailDetailPage() {
    const [cocktails, setCocktails] = useState([]);
    const {cocktail}  = useParams({DrinkCard});
    const drink = drink.findById((d) => d.idDrink === cocktail);

    useEffect(function() {
        async function getDrink() {
            const cocktail = await drinksAPI.getById();
            setCocktails(cocktail);
        }
        getDrink();
    }, []);

    return (
        <div key={cocktail.idDrink}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.dstrDrink}></img>
            <h3>{cocktail.strCategory}</h3>
            <p>{cocktail.strInstructions}</p>
        // </div>
    );
}