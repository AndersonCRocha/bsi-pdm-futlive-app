import styled from 'styled-components/native'

export const LogoWrapper = styled.View`
  background-color: ${({ theme }) => theme.green};
  flex-direction: ${props => props.direction};
  width: ${props => props.size ?? '100%'};
  align-items: center;
  padding: 8px 20px;
`

export const LogoImage = styled.Image`
  width: ${props => props.size ?? '80px'};
  height: ${props => props.size ?? '80px'};
  margin-right: 8px;
`

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: bold;
`
