import React from 'react'
import SplashScreen from 'react-native-splash-screen'

import { useAuth } from '../contexts/auth'

import Loading from '../components/Loading'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = () => {
  const { signed, isLoading } = useAuth()

  if (!isLoading) {
    SplashScreen.hide()
  } else {
    return <Loading />
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
