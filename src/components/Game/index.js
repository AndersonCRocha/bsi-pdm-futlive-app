import React from 'react'
import Team from '../Team'
import {
  Date,
  DateWrapper,
  GameWrapper,
  Goals,
  TeamsWrapper,
  Versus,
} from './styles'

const Game = ({ game, onPress }) => {
  return (
    <GameWrapper onPress={onPress}>
      <DateWrapper>
        <Date>30 de Setembro, 16:00h</Date>
      </DateWrapper>
      <TeamsWrapper>
        <Team team={game.homeTeam} />
        {game.homeTeam.goals && <Goals>{game.homeTeam.goals}</Goals>}
        <Versus>X</Versus>
        {game.visitingTeam.goals && <Goals>{game.visitingTeam.goals}</Goals>}
        <Team team={game.visitingTeam} />
      </TeamsWrapper>
    </GameWrapper>
  )
}

export default Game
