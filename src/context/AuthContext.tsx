import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AuthState, User } from '../types';
import { loginUser, registerUser } from '../services/authService';
import { setAuthToken } from '../services/api';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  // Load token from localStorage on app start
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      // Optionally, you can fetch user info from backend
      // and set it in authState
      setAuthState((prev) => ({ ...prev, isAuthenticated: true }));
    }
  }, []);

  // Login
  const login = async (email: string, password: string) => {
    try {
      const user: User = await loginUser(email, password);
      setAuthState({
        isAuthenticated: true,
        user,
      });
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Login failed');
    }
  };

  // Register
  const register = async (name: string, email: string, password: string) => {
    try {
      const user: User = await registerUser(name, email, password);
      setAuthState({
        isAuthenticated: true,
        user,
      });
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Registration failed');
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
