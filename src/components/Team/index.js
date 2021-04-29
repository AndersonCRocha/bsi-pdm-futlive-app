import React from 'react'
import { FILES_SERVER_URL } from '../../utils/constants'
import { ShieldWrapper, TeamName, TeamShield, TeamWrapper } from './styles'

const Team = ({ team }) => {
  return (
    <TeamWrapper>
      <ShieldWrapper>
        <TeamShield
          source={{ uri: `${FILES_SERVER_URL}/${team.shield}.png` }}
          resizeMode="contain"
        />
        <TeamName>{team.name}</TeamName>
      </ShieldWrapper>
    </TeamWrapper>
  )
}

export default Team
