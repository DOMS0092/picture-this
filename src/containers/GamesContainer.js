import {useState, useEffect} from 'react'

export const GamesContainer = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/games")
        .then(res=>res.json())
        .then(data=>setGames(data))
        .catch(error=>alert(error))
    }, [input])
    return (
        <div>
            
        </div>
    )
}
