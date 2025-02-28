
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store'; 
import axios from 'axios';

interface AuthContextType {
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync('authToken');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Error loading token:', error);
      }
    };
    loadToken();
  }, []);

  // here is the Axiios request interceptor to add token to my requests
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const setAuthHeader = async () => {
          try {
            const storedToken = await SecureStore.getItemAsync('authToken');
            if (storedToken && config.headers) {
              config.headers.Authorization = `Bearer ${storedToken}`;
            }
          } catch (error) {
            console.error('Error setting auth header:', error);
          }
        };

        setAuthHeader().catch((error) => {
          console.error('Error setting auth header:', error);
        });

        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

 
  const login = async (token: string) => {
    try {
      await SecureStore.setItemAsync('authToken', token, {
        
      });
      setToken(token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  
  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync('authToken');
      setToken(null);
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
