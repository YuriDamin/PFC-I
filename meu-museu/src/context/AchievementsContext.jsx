import React, { createContext, useContext, useEffect, useState } from "react";
import Toast from "../components/Toast";

const AchievementsContext = createContext();

export function AchievementsProvider({ children }) {
  const [achievements, setAchievements] = useState({});
  const [toast, setToast] = useState(null);

  // Carrega do localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("achievements") || "{}");
    setAchievements(saved);
  }, []);

  // Salva no localStorage
  useEffect(() => {
    localStorage.setItem("achievements", JSON.stringify(achievements));
  }, [achievements]);

  const unlock = (key, description) => {
    if (achievements[key]) return; // já desbloqueada

    setAchievements((prev) => ({ ...prev, [key]: true }));
    setToast({ message: `🏅 Nova insígnia: ${description}!`, type: "success" });
  };

  const hasAchievement = (key) => !!achievements[key];

  return (
    <AchievementsContext.Provider value={{ achievements, unlock, hasAchievement }}>
      {children}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </AchievementsContext.Provider>
  );
}

export function useAchievements() {
  return useContext(AchievementsContext);
}
