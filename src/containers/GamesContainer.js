import { useState, useEffect } from "react"
import  GameFilter  from "../components/games/GameFilter"
import GamesList from "../components/games/GamesList"
import React from 'react'

const GamesContainer = () => {
    const [games, setGames] = useState([])
    const [filteredGames, setFilteredGames] = useState(games)

    useEffect(() => {
        fetch("http://localhost:3000/games")
        .then(res => res.json())
        .then(data => setGames(data))
        // .then(data => setFilteredGames(data))
        .catch(error => alert(error()))
        
    }, [])


    const handleSearch = (searchValue) => {
        const filteredGames = games.filter(game => games.name.toLowerCase()
        .startsWith(searchValue.toLowerCase()))

        setFilteredGames(filteredGames)
    }
    return (
        <div>
            {/* <GameFilter handleSearch={handleSearch} /> */}
            <GamesList games={games}/>
        </div>
    )
}

export default GamesContainer