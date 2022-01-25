import  GameCard from "./GameCard"
import "./Game.css"
import React from 'react'

const GamesList = ({games}) => {
    
    
    return (
        <div className="games-container">
            {games.map(game => <GameCard key={game.id} game={game} />)}
            
        </div>
    )
}
export default GamesList