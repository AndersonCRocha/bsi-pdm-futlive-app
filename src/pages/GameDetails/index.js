import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import Game from '../../components/Game'
import Loading from '../../components/Loading'

import {
  ClassificationTeam,
  ClassificationTeamWrapper,
  DetailsWrapper,
  InformationNotes,
  InformationTitle,
  InformationWrapper,
  PositionText,
  PositionWrapper,
  SeeLineupButton,
  SeeLineupText,
} from './styles'

import games from '../../assets/data/games.json'
import { Block } from '../../components/Game/styles'

const GameDetails = ({ route, navigation }) => {
  const [game, setGame] = useState(null)
  const itemId = route.params.itemId

  useEffect(() => {
    const selectedGame = games.find(({ id }) => id === itemId)
    setGame(selectedGame)
  }, [])

  function renderCaretUpOrDown(team) {
    const { homeTeam, visitingTeam } = game
    if (homeTeam.goals === visitingTeam.goals) {
      return <Icon name="dot-circle-o" color="#FFFF00" size={18} />
    }

    if (team === homeTeam) {
      return team.goals > visitingTeam.goals ? (
        <Icon name="caret-up" color="#00FF00" size={18} />
      ) : (
        <Icon name="caret-down" color="#FF0000" size={18} />
      )
    }

    if (team === visitingTeam) {
      return team.goals > homeTeam.goals ? (
        <Icon name="caret-up" color="#00FF00" size={18} />
      ) : (
        <Icon name="caret-down" color="#FF0000" size={18} />
      )
    }
  }

  if (!game) {
    return <Loading />
  }

  return (
    <DetailsWrapper>
      <Game game={game} />

      <Block>
        <InformationWrapper>
          <InformationTitle>Escalação</InformationTitle>

          <ClassificationTeamWrapper>
            <ClassificationTeam>{game.homeTeam.name}</ClassificationTeam>
            <SeeLineupButton
              onPress={() =>
                navigation.navigate('Escalacao', {
                  gameId: itemId,
                  team: 'homeTeam',
                })
              }
            >
              <SeeLineupText>Visualizar</SeeLineupText>
              <Icon name="angle-right" color="#0000FF" size={18} />
            </SeeLineupButton>
          </ClassificationTeamWrapper>

          <ClassificationTeamWrapper>
            <ClassificationTeam>{game.visitingTeam.name}</ClassificationTeam>
            <SeeLineupButton
              onPress={() =>
                navigation.navigate('Escalacao', {
                  gameId: itemId,
                  team: 'visitingTeam',
                })
              }
            >
              <SeeLineupText>Visualizar</SeeLineupText>
              <Icon name="angle-right" color="#0000FF" size={18} />
            </SeeLineupButton>
          </ClassificationTeamWrapper>
        </InformationWrapper>
      </Block>

      <Block>
        <InformationWrapper>
          <InformationTitle>Sobre o jogo</InformationTitle>

          <ClassificationTeamWrapper>
            <ClassificationTeam>Estádio:</ClassificationTeam>
            <PositionText>{game.stadium}</PositionText>
          </ClassificationTeamWrapper>

          <ClassificationTeamWrapper>
            <ClassificationTeam>Rodada:</ClassificationTeam>
            <PositionText>{game.round}</PositionText>
          </ClassificationTeamWrapper>
        </InformationWrapper>
      </Block>

      <Block>
        <InformationWrapper>
          <InformationTitle>Sobre o campeonato</InformationTitle>

          <ClassificationTeamWrapper>
            <ClassificationTeam>{game.homeTeam.name}</ClassificationTeam>
            <PositionWrapper>
              {renderCaretUpOrDown(game.homeTeam)}
              <PositionText>{game.homeTeam.classification}º lugar</PositionText>
            </PositionWrapper>
          </ClassificationTeamWrapper>

          <ClassificationTeamWrapper>
            <ClassificationTeam>{game.visitingTeam.name}</ClassificationTeam>
            <PositionWrapper>
              {renderCaretUpOrDown(game.visitingTeam)}
              <PositionText>
                {game.visitingTeam.classification}º lugar
              </PositionText>
            </PositionWrapper>
          </ClassificationTeamWrapper>

          <ClassificationTeamWrapper>
            <ClassificationTeam>Campeonato:</ClassificationTeam>
            <PositionText>{game.championship.name}</PositionText>
          </ClassificationTeamWrapper>

          <ClassificationTeamWrapper>
            <ClassificationTeam>Número de rodadas:</ClassificationTeam>
            <PositionText>{game.championship.numberOfRounds}</PositionText>
          </ClassificationTeamWrapper>

          <InformationNotes>
            Podem ocorrer alterações na classificação ao final do jogo
          </InformationNotes>
        </InformationWrapper>
      </Block>
    </DetailsWrapper>
  )
}

export default GameDetails
