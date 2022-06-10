import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comments from "../../components/Comments";
import * as commentsAPI from "../../utilities/comments-api";
import * as drinksAPI from '../../utilities/drinks-api';


export default function CocktailDetailPage({handleAddComment}) {
    const [cocktail, setCocktail] = useState(null);
    const {idDrink}  = useParams();

    async function handleAddComment(comment) {
        const updatedCocktail = await commentsAPI.add(comment, cocktail._id);
        setCocktail(updatedCocktail);
    }
    async function handleDeleteComment(id) {
        const updatedCocktail = await commentsAPI.deleteComment(id);
        setCocktail(updatedCocktail);
    }

    useEffect(function() {
        async function getDrink() {
            const drink = await drinksAPI.getById(idDrink);
            setCocktail(drink);
        }
        getDrink();
    }, []);
    if (!cocktail) return null; 
    return (
        <>
        <div>
            <h2>{cocktail.name}</h2>
            <img src={cocktail.image} alt={cocktail.name}></img>
            <ul>
                {cocktail.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p>{cocktail.instructions}</p>
        </div>
        <Comments cocktail={cocktail} handleDeleteComment={handleDeleteComment} />

        <CommentForm handleAddComment={handleAddComment} />
        
        </>
    );
}