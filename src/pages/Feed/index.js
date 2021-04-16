import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { PER_PAGE_FEED } from '../../utils/constants'
import { sleep } from '../../utils/functions'
import Game from '../../components/Game'

import { FeedHeader, FooterSpace, Loading, Title } from './styles'
import staticGames from '../../assets/data/games.json'

const Feed = ({ navigation, title = 'Últimos jogos' }) => {
  const [games, setGames] = useState([])
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    loadFeed()
  }, [])

  async function fetchFeed(_page) {
    await sleep(500)

    const firstItem = _page * PER_PAGE_FEED
    return staticGames.filter(
      (_, index) => index >= firstItem && index < firstItem + PER_PAGE_FEED
    )
  }

  async function loadFeed() {
    if (isLoading || games.length === staticGames.length || isRefreshing) {
      if (isRefreshing) setIsRefreshing(false)
      return
    }

    setIsLoading(true)

    const actualFeed = await fetchFeed(page)

    setPage(prevState => prevState + 1)
    setGames(prevState => [...prevState, ...actualFeed])
    setIsLoading(false)
    setIsRefreshing(false)
  }

  function handleRefresh() {
    setPage(0)
    setGames([])
    setIsRefreshing(true)
    loadFeed()
  }

  function renderHeader() {
    return (
      <FeedHeader>
        <Title>{title}</Title>
      </FeedHeader>
    )
  }

  function renderItem({ item }) {
    return (
      <Game
        game={item}
        onPress={() => navigation.navigate('Detalhes', { itemId: item.id })}
      />
    )
  }

  const renderFooter = () =>
    isLoading && staticGames.length !== games.length ? (
      <Loading>
        <ActivityIndicator color="black" size={28} />
      </Loading>
    ) : (
      <FooterSpace />
    )

  return (
    <FlatList
      data={games}
      keyExtractor={item => item.id}
      onEndReached={loadFeed}
      onEndReachedThreshold={0.1}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
    />
  )
}

export default Feed
