import React from 'react'
import {Link} from 'react-router-dom'

const GameCard = ({game}) => {
    return (
        <div className="game-card">
            <div style={{width:"300px", margin: "auto"}}/>

            <Link to={`/games/${game.id}`}>{game.title}</Link>
            
            <img src={game.image} alt={game.title}/>
            <h4>Users - {game.popularity}</h4>
        </div>
    )
}
export default GameCard