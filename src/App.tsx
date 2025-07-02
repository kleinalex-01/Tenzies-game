import React from 'react';
import './App.css';
import { useTheme } from './Context/ThemeContext'; 

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <button onClick={toggleTheme}>{theme}</button>

    <div className='appContainer'>
      <div className='gameContainer'>
        <p>test</p>
      </div>
    </div>
    </>
  )
}