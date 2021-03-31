import styled from 'styled-components/native'

export const TeamWrapper = styled.View`
  flex-direction: row;
`

export const ShieldWrapper = styled.View`
  justify-content: center;
  align-items: center;
`

export const TeamShield = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`

export const TeamName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.darkerGray};
  text-transform: uppercase;
`
