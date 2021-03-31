import React from 'react'
import { ShieldWrapper, TeamName, TeamShield, TeamWrapper } from './styles'

const Team = ({ team }) => {
  return (
    <TeamWrapper>
      <ShieldWrapper>
        <TeamShield source={{ uri: team.shield }} resizeMode="contain" />
        <TeamName>{team.name}</TeamName>
      </ShieldWrapper>
    </TeamWrapper>
  )
}

export default Team
