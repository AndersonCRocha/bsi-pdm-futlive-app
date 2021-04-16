import React, { useEffect, useState } from 'react'

import games from '../../assets/data/games.json'
import { Block } from '../../components/Game/styles'
import { Col, Row, Table, Title } from './styles'

const Escalation = ({ route }) => {
  const [escalation, setEscalation] = useState([])
  const [teamName, setTeamName] = useState('')
  const { gameId, team } = route.params

  useEffect(() => {
    const selectedGame = games.find(({ id }) => id === gameId)
    setEscalation(selectedGame[team].escalation)
    setTeamName(selectedGame[team].name)
  }, [])

  return (
    <Block>
      <Table>
        <Title>{teamName}</Title>
        {escalation.map(player => (
          <Row key={player.number}>
            <Col width={10}>{player.number}</Col>
            <Col width={50}>{player.name}</Col>
            <Col width={40} align="right">
              {player.position}
            </Col>
          </Row>
        ))}
      </Table>
    </Block>
  )
}

export default Escalation
