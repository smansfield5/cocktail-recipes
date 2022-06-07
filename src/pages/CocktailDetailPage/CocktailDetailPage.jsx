import { useParams } from "react-router-dom";
import DrinkCard from "../../components/DrinkCard/DrinkCard";

export default function CocktailDetailPage() {
    const {cocktail}  = useParams({DrinkCard});
    const drink = idDrink.findById((d) => d.idDrink === cocktail);
    return (
        <div key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.dstrDrink}></img>
            <h3>{drink.strCategory}</h3>
            <p>{drink.strInstructions}</p>
        </div>
    )
}