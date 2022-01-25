import './App.css';
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom'
import GameCard  from './games/GameCard';
import GameForm from './comments/CommentForm';
import GamesContainer from '../containers/GamesContainer'; 
import Navbar from './navigation/Navbar'
import Header from './navigation/Header'
import Footer from './navigation/Footer'
import Home from './Home'
import About from './About'
import React from 'react'
import GameDetails from './games/GameDetails';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header title="Top Video Games 2021" />
        <Switch>

          <Route path="/games/:id">
            <GameDetails />
          </Route>

          <Route path="/games">
            <GamesContainer />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
