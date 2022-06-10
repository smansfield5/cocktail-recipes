export default function Comments({cocktail, handleDeleteComment}) {
    return (
        cocktail.comments.map(c => <p>{c.comment}<button onClick={() => handleDeleteComment(c._id)} >X</button></p>)
    )
}