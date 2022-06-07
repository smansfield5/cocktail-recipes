// import './RecipeIndex.css'
// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

// export default function indexAPI({handleDetails}) {
//     const [cocktail, setCocktail] = useState([]);
//     const navigate = useNavigate();
//     useEffect(() => {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
//         .then((results) => results.json())
//         .then((data) => {
           
//             setCocktail(data.drinks);
//         })
//     }, []);

//     function handleDetails() {
//     navigate('/CocktailDetailPage')    
//     } 

//     return (
//         <div>
//             <h1>Drinks</h1>
//             {cocktail.map((drink) => {
//                 const {
//                     idDrink,
//                     strDrink,
//                     strCategory,
//                     strDrinkThumb,
//                     strInstructions
//                 } = drink;
//                 return (
//                     <div key={idDrink}>
//                         <h2>{strDrink}</h2>
//                         <img src={strDrinkThumb} alt={strDrink}></img>
//                         <h3>{strCategory}</h3>
//                         <p>{strInstructions}</p>
//                         <button onClick={handleDetails}>Details</button>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }