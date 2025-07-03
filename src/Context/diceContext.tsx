import React, { createContext, useContext, useState } from 'react';

export interface Die {
    idx: number;
    number: number;
    isClicked: boolean;
    isCorrect: boolean;
    isFalse: boolean;
}

interface DiceContextType {
  dice: Die[];
  setDice: React.Dispatch<React.SetStateAction<Die[]>>;
  rollDice: () => void;
}

const DiceContext = createContext<DiceContextType | undefined>(undefined);

export const useDice = () => {
    const context = useContext(DiceContext);
    if (!context) {
        throw new Error('useDice must be used within a DiceProvider');
    }
    return context;
}

export const DiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dice, setDice] = useState<Die[]>(
    Array.from({ length: 10 }, (_, i) => ({
        idx: i,
        number: Math.floor(Math.random() * 9) + 1,
        isClicked: false,
        isCorrect: false,
        isFalse: false,
    }))
  );

  
  const rollDice = () => {
    setDice((prevDice) => {
        return prevDice.map((die) => {
            if (!die.isClicked) {
            return {
                ...die,
                number: Math.floor(Math.random() * 9) + 1,
                isCorrect: false,
                isFalse: false,
            };
            }
            return die;
        });
    })
  };

  return (
    <DiceContext.Provider value={{ dice, setDice, rollDice }}>
      {children}
    </DiceContext.Provider>
  );
};