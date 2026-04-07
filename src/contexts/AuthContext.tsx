import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; name: string } | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock credentials — documented for future Supabase Auth migration
const MOCK_EMAIL = 'admin@imperiopharma.com';
const MOCK_PASSWORD = 'imperio@2026!';
const MOCK_USER = { email: MOCK_EMAIL, name: 'Admin Império' };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    const saved = sessionStorage.getItem('imperio-auth');
    if (saved) return { isAuthenticated: true, user: MOCK_USER };
    return { isAuthenticated: false, user: null };
  });

  const login = useCallback((email: string, password: string) => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      sessionStorage.setItem('imperio-auth', '1');
      setState({ isAuthenticated: true, user: MOCK_USER });
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('imperio-auth');
    setState({ isAuthenticated: false, user: null });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
