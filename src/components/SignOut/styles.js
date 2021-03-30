import styled from 'styled-components/native'

export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 8px;
  background-color: ${({ theme }) => theme.red};
  padding: 8px;
  border-radius: 4px;
`

export const SignOutText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  margin-left: 8px;
`
