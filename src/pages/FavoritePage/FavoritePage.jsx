// import { useEffect, useState } from "react"
// import RecipeIndex from "../RecipeIndex/RecipeIndex"
// import * as favoriteAPI from "../../utilities/favorites-api";
// import axios from "axios";
// import { response } from "express";

// export default function FavoritePage() {
//     //const [favorite, setFavorite] = useState([])
//     state = {
//         cocktail: [],
//         favorites: []
//     };
//     addFavorite = favorite => {
//         const { favorites } = this.state;
//         if (!favorites.some(alreadyFavorite => alreadyFavorite.id === favorite.id)) {
//             this.setState({
//                 favorites: [...this.state.favorites, favorite]
//             });
//         }
//     };

//     getFavs = async () => {
//         const api = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.id}`).then((res) => res.json())

//         await axios
//             .get(api)
//             .then(response => {
//                 this.setState({
//                     cocktail: response.data.result
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//         };
//         addToFavorites() {
//             this.
//         }
//     }
//     return <h1>My Favorite Cocktails</h1>
  
// }