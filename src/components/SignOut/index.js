import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useAuth } from '../../contexts/auth'
import { useTheme } from '../../hooks/useTheme'
import { SignOutButton, SignOutText } from './styles'

const SignOut = () => {
  const { signOut } = useAuth()
  const theme = useTheme()

  return (
    <SignOutButton onPress={signOut}>
      <Icon name="user" size={14} color={theme.white} />
      <SignOutText>Sair</SignOutText>
    </SignOutButton>
  )
}

export default SignOut
