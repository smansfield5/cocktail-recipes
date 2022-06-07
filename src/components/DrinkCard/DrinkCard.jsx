import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import App from '../../pages/App/App';


export default function DrinkCard(drink) {
    return (
        <div>
            <Link to={`/detail/${idDrink} `}>
                <div>
                <div key={data.idDrink}>
                        <h2>{drink.strDrink}</h2>
                        <img src={strDrinkThumb} alt={strDrink}></img>
                        <h3>{strCategory}</h3>
                        <p>{strInstructions}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}