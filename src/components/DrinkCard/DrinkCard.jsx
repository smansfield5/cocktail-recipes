import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';



export default function DrinkCard({drink}) {
    return (
        <div>
            <Link to={`/detail/${drink.idDrink} `}>
                <div>
                <div key={drink.idDrink}>
                        <h2>{drink.strDrink}</h2>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
                        <h3>{drink.strCategory}</h3>
                        <p>{drink.strInstructions}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}