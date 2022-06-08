import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import DrinkCard from "../../components/DrinkCard/DrinkCard";
import * as drinksAPI from '../../utilities/drinks-api'
//import * as drinksAPI from '../../controllers/api/drinks'

export default function CocktailDetailPage() {
    const [cocktail, setCocktail] = useState(null);
    const {idDrink}  = useParams();

    useEffect(function() {
        async function getDrink() {
            const drink = await drinksAPI.getById(idDrink);
            setCocktail(drink);
        }
        getDrink();
    });

    return (
        <div key={idDrink}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
            <h3>{cocktail.strCategory}</h3>
            <p>{cocktail.strInstructions}</p>
        </div>
    );
}