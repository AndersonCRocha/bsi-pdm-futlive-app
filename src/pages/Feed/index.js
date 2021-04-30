import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList } from 'react-native'
import { DETAILS_API_URL, FEED_API_URL } from '../../utils/constants'
import api from '../../services/api'
import Game from '../../components/Game'

import { FeedHeader, FooterSpace, Loading, Title } from './styles'

const Feed = ({ navigation, title = 'Últimos jogos' }) => {
  const [games, setGames] = useState([])
  const [totalGames, setTotalGames] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [feedApiIsUnavailable, setFeedApiIsUnavailable] = useState(false)
  const [
    gameDetailsApiIsUnavailable,
    setGameDetailsApiIsUnavailable,
  ] = useState(false)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      verifyServices()
        .then(() => {
          fetchTotalGames()
          loadFeed(true)
        })
        .catch(() => {
          navigation.navigate('ServiceUnavailable', {
            targetRoute: 'Feed',
          })
        })
    })

    return unsubscribe
  }, [navigation])

  async function verifyServices() {
    const [feedApiIsAlive, detailsApiIsAlive] = await Promise.all([
      api.apiIsAlive(FEED_API_URL),
      api.apiIsAlive(DETAILS_API_URL),
    ])

    setFeedApiIsUnavailable(!feedApiIsAlive)
    setGameDetailsApiIsUnavailable(!detailsApiIsAlive)

    return feedApiIsAlive ? Promise.resolve() : Promise.reject()
  }

  async function fetchTotalGames() {
    try {
      setTotalGames(await api.getFeedItemTotal())
    } catch (error) {
      setFeedApiIsUnavailable(true)
    }
  }

  async function loadFeed(_isRefreshing = false) {
    if (
      isLoading ||
      (totalGames !== 0 &&
        games.length === totalGames &&
        _isRefreshing !== true)
    ) {
      return
    }

    if (_isRefreshing === true) {
      setGames([])
      setPage(1)
      setIsRefreshing(true)
    }

    if (feedApiIsUnavailable) {
      navigation.navigate('ServiceUnavailable', {
        targetRoute: 'Feed',
      })
    } else {
      setIsLoading(true)
      const _page = _isRefreshing === true ? 1 : page
      const actualFeed = await api.findGamesByPage(_page)

      setPage(prevState => prevState + 1)
      setGames(prevState => [...prevState, ...actualFeed])
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  function handleRefresh() {
    verifyServices()
      .then(() => {
        fetchTotalGames()
        loadFeed(true)
      })
      .catch(() => {
        navigation.navigate('ServiceUnavailable', {
          targetRoute: 'Feed',
        })
      })
  }

  function renderHeader() {
    return (
      <FeedHeader>
        <Title>{title}</Title>
      </FeedHeader>
    )
  }

  function renderItem({ item }) {
    function navigate() {
      navigation.navigate('Detalhes', { itemId: item.id })
    }

    function alertServerIsUnavailable() {
      Alert.alert(
        'O servidor está indisponível no momento. Tente novamente mais tarde!'
      )
    }

    return (
      <Game
        game={item}
        onPress={
          gameDetailsApiIsUnavailable ? alertServerIsUnavailable : navigate
        }
      />
    )
  }

  const renderFooter = () =>
    isLoading && totalGames !== games.length ? (
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
