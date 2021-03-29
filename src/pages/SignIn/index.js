import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useAuth } from '../../contexts/auth'

const SignIn = () => {
  const { signIn } = useAuth()

  function handleGoogleSignIn() {
    alert('pressionou')
    signIn()
  }

  return (
    <View>
      <TouchableOpacity onPress={handleGoogleSignIn}>
        <Text>Fazer login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
