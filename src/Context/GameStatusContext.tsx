import React, { createContext, useContext, useState } from 'react';

export const GameStatusContext = createContext<{
    isWon: boolean;
    setIsWon: React.Dispatch<React.SetStateAction<boolean>>;} | null>(null);

export const useGameStatus = () => {
    const context = useContext(GameStatusContext);
    if (!context) {
        throw new Error('useGameStatus must be used within a GameStatusProvider');
    }
    return context;
}

export const GameStatusProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [isWon, setIsWon] = useState<boolean>(false);

    return (
        <GameStatusContext.Provider value={{ isWon, setIsWon }}>
            {children}
        </GameStatusContext.Provider>
    );
}