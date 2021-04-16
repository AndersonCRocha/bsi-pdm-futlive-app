import React from 'react'
import Team from '../Team'
import {
  Block,
  Date,
  DateWrapper,
  GameWrapper,
  Goals,
  ScoreboardWrapper,
  TeamsWrapper,
  Versus,
} from './styles'

const Game = ({ game, onPress }) => {
  return (
    <Block>
      <GameWrapper onPress={onPress}>
        <DateWrapper>
          <Date>{game.date}</Date>
        </DateWrapper>
        <TeamsWrapper>
          <Team team={game.homeTeam} />
          <ScoreboardWrapper>
            {game.homeTeam.goals != null && (
              <Goals>{game.homeTeam.goals}</Goals>
            )}
            <Versus>X</Versus>
            {game.visitingTeam.goals != null && (
              <Goals>{game.visitingTeam.goals}</Goals>
            )}
          </ScoreboardWrapper>
          <Team team={game.visitingTeam} />
        </TeamsWrapper>
      </GameWrapper>
    </Block>
  )
}

export default Game
