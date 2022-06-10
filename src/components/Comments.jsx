export default function Comments({cocktail}) {
    return (
        cocktail.comments.map(c => <p>{c.comment}</p>)
    )
}