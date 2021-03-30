import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { AuthProvider } from './contexts/auth'

import Routes from './routes'

const defaultTheme = {
  green: '#52ff4d',
  black: '#222222',
  lightGray: '#DDDDDD',
  gray: '#BBBBBB',
  darkerGray: '#555555',
  white: '#ffffff',
  red: '#ff5959',
}

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App
