import React, { createContext, useContext, useState, useEffect } from 'react';
import Toast from '../components/Toast';

const XPContext = createContext();

export function XPProvider({ children }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const savedXP = parseInt(localStorage.getItem('xp') || '0', 10);
    setXp(savedXP);
    setLevel(Math.floor(savedXP / 100) + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem('xp', xp);
  }, [xp]);

  const addXP = (amount) => {
    const prevXP = xp;
    const newXP = prevXP + amount;
    const prevLevel = Math.floor(prevXP / 100) + 1;
    const newLevel = Math.floor(newXP / 100) + 1;

    setXp(newXP);
    setLevel(newLevel);

    // 🔊 toca o som e anima a barra
    const audio = new Audio('/sounds/xp_gain.wav');
    audio.volume = 0.4;
    audio.play();

    const bar = document.querySelector('.xp-bar-fill');
    if (bar) {
      bar.classList.add('xp-flash');
      setTimeout(() => bar.classList.remove('xp-flash'), 1200);
    }

    // 🟢 feedback de Level Up
    if (newLevel > prevLevel) {
      const levelUpSound = new Audio('/sounds/level_up.wav');
      levelUpSound.volume = 0.5;
      levelUpSound.play();

      setToast({
        message: `🏅 Parabéns! Você subiu para o Nível ${newLevel}!`,
        type: 'info',
      });
    }
  };

  const progress = (xp % 100) / 100;

  return (
    <XPContext.Provider value={{ xp, addXP, level, progress }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </XPContext.Provider>
  );
}

export function useXP() {
  return useContext(XPContext);
}
