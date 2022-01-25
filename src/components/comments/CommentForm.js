import { useState } from 'react'

const CommentForm = ({game, setGame}) => {
    const [comment, setComment] = useState({
     
        text: "", 
        rating: "",
    })

    const handleChange = (e) => {
        setComment(currentComment => {
            return {...currentComment, [e.target.name]: e.target.value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedGame = {...game,comments: [...game.comments, comment], id: game.comments.slice(-1)[0].id+1};
      
        console.log (updatedGame);
// debugger
        fetch(`http://localhost:3000/games/${game.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedGame)

        })
        .then(res => res.json())
        .then(data => setGame(data))
        .catch(error => alert(error))
        setComment({
            
            text: "", 
            rating: "",
        })
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Text</label>
                <input type="text" value={comment.text} onChange={handleChange} name="text"/><br/>
                <label>Rating</label>
                <input type="number" value={comment.rating} onChange={handleChange} name="rating"/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default CommentForm