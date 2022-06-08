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
    }, []);
    if (!cocktail) return null;
    return (
        <div>
            <h2>{cocktail.name}</h2>
            <img src={cocktail.image} alt={cocktail.name}></img>
            <ul>
                {cocktail.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p>{cocktail.instructions}</p>
        </div>
    );
}