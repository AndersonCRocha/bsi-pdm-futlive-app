import {
  FEED_API_URL,
  DETAILS_API_URL,
  ESCALATION_API_URL,
} from '../utils/constants'

export default {
  async getFeedItemTotal() {
    try {
      const url = `${FEED_API_URL}/feed-total`
      console.log('Fetching total games in: ', url)
      const response = await fetch(url)
      const total = parseInt(await response.text())

      return total
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  },
  async findGamesByPage(_page) {
    try {
      const url = `${FEED_API_URL}/feed?page=${_page}`
      console.log('Fetching feed in: ', url)
      const response = await fetch(url)

      return response.json()
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  },
  async findGameById(gameId) {
    try {
      const url = `${DETAILS_API_URL}/game-details/${gameId}`
      console.log('Fetching game details in: ', url)
      const response = await fetch(url)

      return await response.json()
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  },
  async findEscalationByTeamId(teamId) {
    try {
      const url = `${ESCALATION_API_URL}/escalation/${teamId}`
      console.log('Fetching escalation in: ', url)
      const response = await fetch(url)

      return await response.json()
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  },
  async apiIsAlive(baseUrl) {
    try {
      const response = await fetch(`${baseUrl}/is-alive`)
      const isAlive = await response.text()

      return isAlive.includes('true')
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  },
}
