import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  // 🔹 Recupera usuário salvo no localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      // Compatibilidade retroativa — adiciona campos novos se não existirem
      if (parsed && !parsed.name) {
        parsed.name = parsed.email?.split("@")[0] || "Usuário";
        parsed.isVisitor = parsed.email === "visitante@museu.com";
        localStorage.setItem("user", JSON.stringify(parsed));
      }
      setUser(parsed);
    }
  }, []);

  // 🔹 Login com validação e mensagem personalizada
  const login = (email, senha) => {
    const isAdmin = email === "admin@museu.com" && senha === "1234";
    const isVisitor = email === "visitante@museu.com" && senha === "guest";

    if (isAdmin || isVisitor) {
      const newUser = {
        email,
        name: isAdmin ? "Administrador" : "Visitante",
        isVisitor,
      };

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/");

      // === Mensagem de boas-vindas ===
      setToast({
        message: isVisitor
          ? "👋 Bem-vindo(a), Visitante! Aproveite o museu!"
          : "👋 Bem-vindo de volta, Administrador!",
        type: "success",
      });

      return true;
    }

    // === Mensagem de erro ===
    setToast({
      message: "❌ Credenciais inválidas. Tente novamente.",
      type: "error",
    });
    return false;
  };

  // 🔹 Logout com redirecionamento
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
