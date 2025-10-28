import React, { createContext, useContext, useState, useEffect } from 'react';

const XPContext = createContext();

export function XPProvider({ children }) {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const savedXP = parseInt(localStorage.getItem('xp') || '0', 10);
    setXp(savedXP);
  }, []);

  useEffect(() => {
    localStorage.setItem('xp', xp);
  }, [xp]);

  const addXP = (amount) => {
    setXp((prev) => prev + amount);
  };

  // Cálculo do nível (exemplo: a cada 100XP = +1 nível)
  const level = Math.floor(xp / 100) + 1;
  const progress = (xp % 100) / 100;

  return (
    <XPContext.Provider value={{ xp, addXP, level, progress }}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  return useContext(XPContext);
}
