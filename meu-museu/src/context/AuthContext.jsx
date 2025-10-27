import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, senha) => {
    const isAdmin = email === 'admin@museu.com' && senha === '1234';
    const isVisitor = email === 'visitante@museu.com' && senha === 'guest';

    if (isAdmin || isVisitor) {
      const newUser = { email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/');

      if (isVisitor) {
        setToast({
          message: 'Você está no modo visitante. Seu progresso não será salvo.',
          type: 'success',
        });
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
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
