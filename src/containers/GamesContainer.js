import { useState, useEffect } from "react"
import GamesList from "../components/games/GamesList"
import React from 'react'

const GamesContainer = () => {
    const [games, setGames] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/games")
        .then(res => res.json())
        .then(data => setGames(data))
        .catch(error => alert(error()))
        
    }, [])


    return (
        <div>
           
            <GamesList games={games}/>
        </div>
    )
}

export default GamesContainer