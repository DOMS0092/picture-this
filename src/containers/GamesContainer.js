import { useState, useEffect } from "react"
import GamesList from "../components/games/GamesList"
import React from 'react'
import GameFilter from "../components/games/GameFilter"


const GamesContainer = () => {
    const [games, setGames] = useState([])
// games is 1 state list, so we must 
// create a 2nd list to filter search games
// hints[2 state variables] 
const [filteredGames, setFilteredGames] = useState([])
const [sortedGames, setSortedGames] = useState([])


    useEffect(() => {  
        fetch("http://localhost:3000/games") 
        .then(res => res.json())
        .then(data => setGames(data))
        .catch(error => alert(error()))
        //.then(data => setSortedGames(data))
    }, [])

    const handleSearch = (searchValue) => {
        // handleSearch has to be passed down to the filter
        const filteredGames = games.filter(game => game.title.toLowerCase().startsWith(searchValue.toLowerCase()))
        // Get what the user typed in the input
        // Filter the full list based on that
        // Update the filterdGames using the array returned by filter
        
        setFilteredGames(filteredGames)
    }

    const handleSort = () => {
        const conditionalGames = filteredGames.length === 0 ? games: filteredGames
        const sortedGames = [...conditionalGames].sort((game1, game2)=>game2.popularity - game1.popularity)
        setSortedGames(sortedGames)
        // item.sort(function (a, b) {
        //     return a.value - b.value;
    
    }


    return (
        <div>
            {/* <GameFilter handleSearch= {handleSearch} />  */}
            <button onClick={handleSort}>Sort by popularity</button>
            <GamesList games={sortedGames.length === 0 ? games : sortedGames}/>
        </div>
    )
}

export default GamesContainer