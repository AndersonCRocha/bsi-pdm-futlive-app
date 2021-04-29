import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { FEED_API_URL, PER_PAGE_FEED } from '../../utils/constants'
import { sleep } from '../../utils/functions'
import Game from '../../components/Game'

import { FeedHeader, FooterSpace, Loading, Title } from './styles'
import staticGames from '../../assets/data/games.json'
import { useLayoutEffect } from 'react'

const Feed = ({ navigation, title = 'Últimos jogos' }) => {
  const [games, setGames] = useState([])
  const [totalGames, setTotalGames] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  useLayoutEffect(() => {
    fetchTotalGames()
  }, [])

  useEffect(() => {
    loadFeed()
  }, [])

  async function fetchTotalGames() {
    try {
      const response = await fetch(`${FEED_API_URL}/feed-total`)
      const total = parseInt(await response.text())
      setTotalGames(total - 1)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchFeed(_page) {
    try {
      const response = await fetch(`${FEED_API_URL}/feed?page=${_page}`)
      return response.json()
    } catch (error) {
      console.log(error)
    }
  }

  async function loadFeed() {
    if (isLoading || games.length > totalGames || isRefreshing) {
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
