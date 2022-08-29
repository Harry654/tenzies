import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [target, setTarget] = useState(1);
  const [targetControl, setTargetControl] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [tiles, setTiles] = useState([
    {
      id: 1,
      fixed: false
    },
    {
      id: 2,
      fixed: false
    },
    {
      id: 3,
      fixed: false
    },
    {
      id: 4,
      fixed: false
    },
    {
      id: 5,
      fixed: false
    },
    {
      id: 6,
      fixed: false
    },
    {
      id: 7,
      fixed: false
    },
    {
      id: 8,
      fixed: false
    },
    {
      id: 9,
      fixed: false
    },
    {
      id: 10,
      fixed: false
    }
  ]);
  useEffect(() => {
    setTarget(Math.round(Math.random() * 10));
    window.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === 'r') roll();
    })
  }, [targetControl]);

  useEffect(() => {
    let done = tiles.filter(tile => tile.fixed && tile.id === target);
    setCompleted(done.length);
    if (done.length === 10) alert("Task done. Congratulations!!");
  }, [tiles]);
  
  const roll = () => {
    setTiles((tiles) => tiles.map(tile => ({...tile, id: tile.fixed ? tile.id : Math.round(Math.random() * 10)})));
  }
  
  const fix = (index) => {

    setTiles((tiles) => tiles.map((tile, currentIndex) => currentIndex === index ? {...tile, fixed: !tile.fixed} : tile));
    
    // if (tiles[0] == tiles[1]) alert("winner!!");
  }
  const reset = () => {
    setTiles((tiles) => tiles.map(tile => ({ id: Math.round(Math.random() * 10), fixed: false})));
    setTarget(Math.round(Math.random() * 10));

  }
  return (
    <div className="App">
      <h1 className="header">{target}</h1>
      <progress value={completed} max="10"></progress>
      <div className="board">

        {tiles.map((tile, index) => (
          <p key={index} className="tile" onClick={() => {fix(index)}} 
              style={{backgroundColor: tile.fixed ? 'rgba(2, 255, 2, 0.6)' : 'rgb(222, 213, 201)'}}
          >{tile.id}</p>
        ))}

      <button className="roll" onClick={() => {roll()}}>Roll</button>
      <button className="reset" onClick={() => {reset()}}>Reset</button>
      </div>

    </div>
  )
}

export default App
