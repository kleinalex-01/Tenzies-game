import React, { useState } from 'react';
import styles from "./Dies.module.css";

interface Die {
    idx: number;
    number: number;
    isClicked: boolean;
    isCorrect: boolean;
    isFalse: boolean;
}

export const Dies: React.FC = () => {
  const [dice, setDice] = useState<Die[]>(
    Array.from({ length: 10 }, (_, i) => ({
        idx: i,
        number: Math.floor(Math.random() * 9) + 1,
        isClicked: false,
        isCorrect: false,
        isFalse: false,
    }))
  );

  return (
    <div >
      <div className={styles.diceContainer}>
        {dice.map((die) => (
          <button
            key={die.idx}
            className={`${styles.diceButton}`}>
            {die.number}
          </button>
        ))}
      </div>
    </div>
  );
};
