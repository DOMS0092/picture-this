import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { CommentCard } from '../comments/CommentCard'
import CommentForm from '../comments/CommentForm'

const GameDetails = () => { 
    const [game, setGame] = useState({})
    const {id} = useParams([])


    
    useEffect(() => {
        fetch(`http://localhost:3000/games/${id}`)
        .then(res => res.json())
        .then(data => setGame(data))
    
        .catch(error => alert(error()))
    }, [id])

    if (Object.keys(game).length === 0) return <h2>Loading...</h2>
        

    return (
        
        <div className="game-card">
        <div style={{width:"300px", margin: "auto"}}/>

        <h2>{game.title}</h2>
        
        <img src={game.image} alt={game.title}/>
        <h4> Users: {game.popularity}</h4>
        <h4>Price: {game.price}</h4>
        <p>{game.description}</p>
        <CommentForm game={game} setGame={setGame}/>
        {game.comments.map(comment => <CommentCard key={comment.id}comment={comment}/>)}
       
        </div>                                     
   )
}
export default GameDetails
