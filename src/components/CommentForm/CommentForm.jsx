//import { useState } from "react";

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import * as drinksAPI from '../../utilities/drinks-api'
//import PostListPage from "../../pages/PostListPage/PostList";

export default function CommentForm() {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');
    
    useEffect(function() {
        async function getPosts() {
            const comment = await drinksAPI.getAll();
            setComment(comment);
        }
        getPosts()
    }, []);
    
    async function handleAddComment(e) {
        e.preventDefault();
        const payload = {comment, rating};
        await drinksAPI.add(payload);      
        Navigate('/detail/:id')
    }

    return (
        <>
        <br />
        <form onSubmit={handleAddComment}>
            <h2>Comments</h2><br />
            <textarea 
            onChange={e => setComment(e.target.value)}
            value={comment} 
            placeholder="Comments"
            name="comments" 
            cols="30" rows="10"></textarea>
            <br />
            <h2>Rating</h2>
            <br />
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />
            <button type="submit">Submit Comment</button>
        </form>
        </>
    )
}

