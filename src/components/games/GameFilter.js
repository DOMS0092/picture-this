import {useState} from 'react'
import React from 'react'

const GameFilter = ({handleSearch}) => {
   
    return (
        <div>
            <input type="text" placeholder="Type a character name..." 
            onChange={e => handleSearch(e.target.value)} />
        </div>
    )
}
export default GameFilter