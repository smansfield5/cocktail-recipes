import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import * as drinksAPI from '../../utilities/drinks-api'

export default function CocktailDetailPage() {
    const [cocktail, setCocktail] = useState([]);
    //const {drink}  = useParams();
    //const card = cocktail.find((d) => d.idDrink === cocktail);

    useEffect(function() {
        async function getDrink() {
            const detail= await drinksAPI.getById();
            setCocktail(detail);
        }
        getDrink(setCocktail.idDrink);
    }, []);

    return (
        <div key={cocktail.idDrink}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
            <h3>{cocktail.strCategory}</h3>
            <p>{cocktail.strInstructions}</p>
        // </div>
    );
}