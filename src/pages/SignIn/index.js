import React, { useState } from 'react'
import { Text } from 'react-native'
import { useAuth } from '../../contexts/auth'

import { InputName, SignInButton, SignInWrapper } from './styles'

import Logo from '../../components/Logo'

const SignIn = () => {
  const { signIn, startLoading } = useAuth()
  const [name, setName] = useState('')

  function handleGoogleSignIn() {
    if (!name) {
      alert('Preencha o seu nome!')
      return
    }

    if (name.length < 4) {
      alert('O nome deve ter pelo menos 4 letras')
      return
    }
    startLoading()
    signIn(name)
  }

  return (
    <SignInWrapper>
      <Logo />

      <InputName
        autoFocus={true}
        onChangeText={setName}
        value={name}
        placeholder="Qual o seu nome?"
      />

      <SignInButton onPress={handleGoogleSignIn}>
        <Text>Entrar</Text>
      </SignInButton>
    </SignInWrapper>
  )
}

export default SignIn
