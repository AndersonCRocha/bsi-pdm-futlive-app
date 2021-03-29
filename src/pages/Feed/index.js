import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../contexts/auth'

const Feed = () => {
  const { signOut } = useAuth()

  return (
    <View>
      <Text>Tela de feed</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Deslogar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Feed
