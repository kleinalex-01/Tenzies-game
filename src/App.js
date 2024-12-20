import { React, useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Header from "./Components/Header";
import Dice from './Components/Dice';

function App() {
  const [dice, setDice] = useState(generateAllNewDice())
  const [rollCount, setRollCount] = useState(0)
  const [record, setRecord] = useState(0)
  function generateAllNewDice() {
    return new Array(10)
        .fill(0)
        .map(() => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }))
  }
  function holdDice(id) {
    setDice(prev => prev.map(item =>
      item.id === id ? {...item, isHeld: !item.isHeld} : item
    ))
  }
  const diceElements = dice.map(die => (
    <Dice 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />))
function rollDice() {
  if (checkForWin) {
    setDice(generateAllNewDice());
    setRollCount(0);
  } else {
    setRollCount(prev => prev + 1);
    if (record === rollCount) {
      setRecord(prev => prev + 1)}
    setDice(prev => prev.map(item => item.isHeld ? item : {...item, value: Math.ceil(Math.random() * 6)}));
  }
}

const checkForWin = dice.every(item => item.isHeld && item.value === dice[0].value);

  return (
    <>
      <Header />
      <div className="dice-container">{diceElements}</div>
      {checkForWin && <h1>You Win!</h1>}
      <div className="footer-container">
                <button onClick={rollDice}>{checkForWin ? "New Game" : "Roll"}</button>
            </div>
            <div className="roll-count-container">
                <p>Roll Count: {rollCount}</p>
                <p>All time best:. {record}</p>
            </div>
    </>

  );
}

export default App;
