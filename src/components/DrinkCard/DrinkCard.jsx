import { Link } from 'react-router-dom'

export default function DrinkCard() {
    return (
        <div>
            <Link to={`/drinks/${idDrink} `}>
                <div>
                <div key={idDrink}>
                        <h2>{strDrink}</h2>
                        <img src={strDrinkThumb} alt={strDrink}></img>
                        <h3>{strCategory}</h3>
                        <p>{strInstructions}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}