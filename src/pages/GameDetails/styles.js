import styled from 'styled-components/native'

export const DetailsWrapper = styled.ScrollView`
  padding-bottom: 16px;
`

export const InformationWrapper = styled.View`
  padding: 4px 8px;
`

export const InformationTitle = styled.Text`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`

export const ClassificationTeamWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.gray};
  padding: 8px;
`

export const ClassificationTeam = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
`

export const InformationNotes = styled.Text`
  flex-direction: row;
  text-align: right;
  font-size: 12px;
  padding: 8px;
  color: ${({ theme }) => theme.darkerGray};
`

export const PositionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PositionText = styled.Text`
  padding-left: 8px;
  font-weight: bold;
`

export const SeeLineupButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const SeeLineupText = styled.Text`
  color: #0000f0;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`
