import { createContext, useEffect, useState } from "react";
import { KOSMOS_API } from "../constants/api";
import { useFetch } from "../hooks/useFetch";
import { fetchKosmos } from "../functions/fetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (user) => {
    const isAuth = await kosmosAuth(user);

    if (isAuth.success) {
      const userKosmos = await kosmosUser(isAuth.kosmos);

      if (!userKosmos.success) {
        return;
      }
      setUser(userKosmos.kosmos);
    }
  }

  const kosmosAuth = async (user) => {
    const data = await fetchKosmos('/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (data?.kosmos) {
      return {
        success: true,
        kosmos: data.kosmos
      }
    }

    return {
      success: false,
      kosmos: null
    }
  }

  const kosmosUser = async (id) => {
    const data = await fetchKosmos(`/users`, {})

    if (data?.kosmos) {
      const user = data.kosmos.find(user => user.id === id);

      return {
        success: true,
        kosmos: user
      }
    }

    return {
      success: false,
      kosmos: null
    }
  }

  const logout = () => {
    setUser(null);
  }

  const isLogged = () => {
    
    return !!user;
  }

  const getUser = () => {
    return user;
  }

  const value = { getUser, setUser, login, logout, isLogged };


  useEffect(() => {}, []);


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}