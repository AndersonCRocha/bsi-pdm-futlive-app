import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { basicSignIn } from '../services/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@Auth:user')

      if (storagedUser) {
        setUser(JSON.parse(storagedUser))
      }

      setIsLoading(false)
    }

    loadStoragedData()
  }, [])

  async function signIn(name) {
    const { user } = await basicSignIn(name)
    setUser(user)
    setIsLoading(false)
    await AsyncStorage.setItem('@Auth:user', JSON.stringify(user))
  }

  async function signOut() {
    await AsyncStorage.clear()
    setUser(null)
  }

  function startLoading() {
    setIsLoading(true)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, isLoading, startLoading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
