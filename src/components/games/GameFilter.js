import React from 'react';
import { useState } from 'react';
// use State used to controll the input

const GameFilter = ({handleSearch}) => {
  
  
  
  return (
  <div>
  
    <input type="text" placeholder='search...'
    onChange={(e) => handleSearch(e.target.value)}/>
    
  </div>
  )
}
export default GameFilter