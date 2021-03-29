import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { googleSignIn } from '../services/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadStoragedData() {
      const [
        [, storagedToken],
        [, storagedUser],
      ] = await AsyncStorage.multiGet(['@Auth:token', '@Auth:user'])

      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser))
      }

      setIsLoading(false)
    }

    loadStoragedData()
  }, [])

  async function signIn() {
    const response = await googleSignIn()
    setUser(response.user)

    const tokenRecord = ['@Auth:token', response.token]
    const userRecord = ['@Auth:user', JSON.stringify(response.user)]

    await AsyncStorage.multiSet([tokenRecord, userRecord])
  }

  async function signOut() {
    await AsyncStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, isLoading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
