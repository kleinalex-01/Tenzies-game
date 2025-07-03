import React, { useState } from 'react';
import styles from "./Dies.module.css";
import { useDice } from '../Context/diceContext';
import type { Die } from '../Context/diceContext';

export const Dies: React.FC = () => {
  const { dice, setDice } = useDice();
  const [targetNumber, setTargetNumber] = useState<number | undefined>(undefined);

  const handleDieClick = (die: Die, idx: number) => {
    const isFirstClick = targetNumber === undefined;
    const actualTargetNumber = isFirstClick ? die.number : targetNumber;
    if (isFirstClick) setTargetNumber(actualTargetNumber);

    const updatedDice = dice.map((dice, index) => {
      if (index === idx) {
        const isMatch = dice.number === actualTargetNumber;

        return {
          ...dice,
          isClicked: isMatch,
          isCorrect: isMatch,
          isFalse: !isMatch ? true : false,
        };
      }
      return dice;
    })
    setDice(updatedDice);
  }

  return (
    <div >
      <div className={styles.diceContainer}>
        {dice.map((die, idx) => (
          <button onClick={() => handleDieClick(die, idx)} key={die.idx} className={`${styles.diceButton}`} 
                  style={{pointerEvents: die.isCorrect ? "none" : "all",
                          backgroundColor: die.isCorrect ? "var(--success-color)" : die.isFalse ? "var(--danger-color)" : "var(--primary-color)"}}>
            {die.number}
          </button>
        ))}
      </div>
    </div>
  );
};
