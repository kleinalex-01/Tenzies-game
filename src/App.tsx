import React from 'react';
import './App.css';
import { useTheme } from './Context/ThemeContext';
import { useDice } from './Context/diceContext';
import { Dies } from './Components/Dies';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { rollDice } = useDice();

  return (
    <>
    <button onClick={toggleTheme} className='themeButton'>
      {theme === 'light' ? <i className='bi bi-sun text-white'></i> : <i className='bi bi-moon text-dark'></i>}
    </button>

    <div className='appContainer'>
      <div className='gameContainer p-5'>
        <div className='d-flex flex-column justify-content-between align-items-center'>
          <h1 className='text-center'>Tenzies Game</h1>
          <p className='text-center'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className='diceContainer'>
          <div className='dice mt-4'>
            <Dies />
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-4'>
          <button onClick={rollDice} className='rollButton'>Roll</button>
        </div>
      </div>
    </div>
    </>
  )
}