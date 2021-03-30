import React from 'react'
import { Text, View } from 'react-native'
import { GameWrapper } from './styles'

const Game = ({ item }) => {
  return (
    <GameWrapper>
      <Text>{item.title}</Text>
    </GameWrapper>
  )
}

export default Game
