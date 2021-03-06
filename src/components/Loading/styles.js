import styled from 'styled-components/native'

export const LoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.green};
`

export const BallWrapper = styled.View`
  position: relative;
  align-items: center;
`

export const Ball = styled.Image`
  width: 100px;
  height: 100px;
`

export const Shadow = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.darkerGray};
`
export const TextWrapper = styled.Text`
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
`
