import './Comments.css'

export default function Comments({cocktail, handleDeleteComment}) {
    return (
        cocktail.comments.map(c => <p className="CommentContainer">User: {c.userName}  Rating: {c.rating}/5  Comment: {c.comment}<button onClick={() => handleDeleteComment(c._id)} ><i class="fa-solid fa-trash-can"></i></button></p>)
    )
}