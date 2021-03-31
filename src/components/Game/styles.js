import styled from 'styled-components/native'

export const GameWrapper = styled.TouchableOpacity`
  margin: 8px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 8px;
  margin-bottom: 0;
  padding: 8px;
  background-color: ${({ theme }) => theme.white};
`

export const TeamsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

export const Versus = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.darkerGray};
`

export const DateWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Date = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.darkerGray};
`

export const Goals = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
`
