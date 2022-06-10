import { useState } from "react";


export default function CommentForm({handleAddComment}) {
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState('5');

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddComment({comment: newComment, rating});
        setNewComment('');
        setRating('5');
    }

    return (
        <>
        <br />
        <form onSubmit={handleSubmit}>
            <h2>Comments</h2><br />
            <textarea 
            onChange={(evt) => setNewComment(evt.target.value)}
            value={newComment} 
            placeholder="Comments" 
            cols="30" rows="10"></textarea>
            <br />
            <h2>Rating</h2>
            <br />
            <select 
            value={rating}
            onChange={(evt) => setRating(evt.target.value)}
            >
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

