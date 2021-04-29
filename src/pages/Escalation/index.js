import React, { useEffect, useState } from 'react'
import { ESCALATION_API_URL } from '../../utils/constants'

import { Block } from '../../components/Game/styles'
import { Col, Row, Table, Title } from './styles'

const Escalation = ({ route }) => {
  const [escalation, setEscalation] = useState([])
  const [teamName, setTeamName] = useState('')
  const { teamId } = route.params

  useEffect(() => {
    fetchEscalation(teamId)
  }, [])

  async function fetchEscalation(teamId) {
    try {
      const url = `${ESCALATION_API_URL}/escalation/${teamId}`
      console.log('Fetching escalation in: ', url)
      const response = await fetch(url)
      const escalationResponse = await response.json()
      setEscalation(escalationResponse.escalation)
      setTeamName(escalationResponse.teamName)
    } catch (error) {
      console.log(error)
    }
  }

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
