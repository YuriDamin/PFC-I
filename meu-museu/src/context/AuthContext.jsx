import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const AuthContext = createContext();

const REGISTER_STORAGE_KEY = "users";
const REGISTER_STORAGE_KEYS = [
  REGISTER_STORAGE_KEY,
  "usuarios",
  "registeredUsers",
  "museu_users",
];

function safeJsonParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function getRegisteredUsers() {
  for (const key of REGISTER_STORAGE_KEYS) {
    const data = safeJsonParse(localStorage.getItem(key), []);

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  }

  return [];
}

function saveRegisteredUsers(users) {
  localStorage.setItem(REGISTER_STORAGE_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  // 🔹 Recupera usuário salvo no localStorage
  useEffect(() => {
    const savedUser = safeJsonParse(localStorage.getItem("user"), null);

    if (savedUser) {
      // Compatibilidade retroativa — adiciona campos novos se não existirem
      const parsed = {
        ...savedUser,
        name:
          savedUser.name ||
          savedUser.nome ||
          savedUser.email?.split("@")[0] ||
          "Usuário",
        isVisitor:
          savedUser.isVisitor ??
          normalizeEmail(savedUser.email) === "visitante@museu.com",
      };

      localStorage.setItem("user", JSON.stringify(parsed));
      setUser(parsed);
    }
  }, []);

  // 🔹 Cadastro de novo usuário
  const register = ({ name, email, senha }) => {
    const cleanName = String(name || "").trim();
    const cleanEmail = normalizeEmail(email);
    const cleanPassword = String(senha || "");

    if (!cleanName || !cleanEmail || !cleanPassword) {
      return {
        ok: false,
        message: "Preencha todos os campos para criar sua conta.",
      };
    }

    if (cleanPassword.length < 4) {
      return {
        ok: false,
        message: "A senha deve ter pelo menos 4 caracteres.",
      };
    }

    const fixedEmails = ["admin@museu.com", "visitante@museu.com"];
    const registeredUsers = getRegisteredUsers();

    const emailAlreadyExists =
      fixedEmails.includes(cleanEmail) ||
      registeredUsers.some((item) => normalizeEmail(item.email) === cleanEmail);

    if (emailAlreadyExists) {
      return {
        ok: false,
        message: "Este e-mail já está cadastrado.",
      };
    }

    const newUser = {
      id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
      name: cleanName,
      nome: cleanName,
      email: cleanEmail,
      senha: cleanPassword,
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...registeredUsers, newUser];
    saveRegisteredUsers(updatedUsers);

    setToast({
      message: "✅ Conta criada com sucesso! Faça login para continuar.",
      type: "success",
    });

    return {
      ok: true,
      message: "Conta criada com sucesso.",
    };
  };

  // 🔹 Login com validação e mensagem personalizada
  const login = (email, senha) => {
    const cleanEmail = normalizeEmail(email);
    const cleanPassword = String(senha || "");

    const isAdmin = cleanEmail === "admin@museu.com" && cleanPassword === "1234";
    const isVisitor = cleanEmail === "visitante@museu.com" && cleanPassword === "guest";

    const registeredUsers = getRegisteredUsers();
    const registeredUser = registeredUsers.find((item) => {
      const userEmail = normalizeEmail(item.email);
      const userPassword = String(item.senha ?? item.password ?? "");

      return userEmail === cleanEmail && userPassword === cleanPassword;
    });

    if (isAdmin || isVisitor || registeredUser) {
      const newUser = {
        email: isAdmin || isVisitor ? cleanEmail : registeredUser.email,
        name: isAdmin
          ? "Administrador"
          : isVisitor
            ? "Visitante"
            : registeredUser.name || registeredUser.nome || registeredUser.email?.split("@")[0] || "Usuário",
        isVisitor,
      };

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      setToast({
        message: isVisitor
          ? "👋 Bem-vindo(a), Visitante! Aproveite o museu!"
          : `👋 Bem-vindo(a), ${newUser.name}!`,
        type: "success",
      });

      navigate("/");
      return true;
    }

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
    <AuthContext.Provider value={{ user, login, logout, register }}>
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
