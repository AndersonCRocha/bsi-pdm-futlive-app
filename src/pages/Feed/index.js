import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Game from '../../components/Game'

import { FeedHeader, Title } from './styles'

import games from '../../assets/data/games.json'

const Feed = ({ navigation, title = 'Jogos da semana' }) => {
  function renderHeader() {
    return (
      <FeedHeader>
        <Title>{title}</Title>
      </FeedHeader>
    )
  }

  function renderItem({ item }) {
    return <Game game={item} onPress={() => navigation.navigate('Detalhes')} />
  }

  return (
    <FlatList
      data={games}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
    />
  )
}

export default Feed
