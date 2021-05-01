import React, { useEffect, useState } from 'react'
import { ESCALATION_API_URL } from '../../utils/constants'

import { Block } from '../../components/Game/styles'
import { Col, Row, Table, Title } from './styles'
import api from '../../services/api'

const Escalation = ({ navigation, route }) => {
  const [escalation, setEscalation] = useState([])
  const [teamName, setTeamName] = useState('')
  const { teamId } = route.params

  useEffect(() => {
    async function fetchEscalation() {
      try {
        const response = await api.findEscalationByTeamId(teamId)
        setEscalation(response.escalation)
        setTeamName(response.teamName)
      } catch (error) {
        setApiIsUnavailable(true)
      }
    }

    verifyService()
      .then(() => {
        fetchEscalation()
      })
      .catch(error => {
        console.log('catch: ', error)
        navigation.navigate('ServiceUnavailable', {
          targetRoute: 'Feed',
        })
      })
  }, [teamId])

  async function verifyService() {
    const escalationApiIsAlive = await api.apiIsAlive(ESCALATION_API_URL)

    return escalationApiIsAlive ? Promise.resolve() : Promise.reject()
  }

  if (escalation.length === 0) return null

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
