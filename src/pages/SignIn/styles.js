import styled from 'styled-components/native'

export const SignInWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.green};
`

export const InputName = styled.TextInput`
  width: 80%;
  margin: 0 32px;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  background-color: #ffffff;
  color: #222222;
  text-align: center;
`

export const SignInButton = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 8px 32px;
  font-size: 18px;
  color: #222222;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.lightGray};
`
