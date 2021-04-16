import styled from 'styled-components/native'

export const Title = styled.Text`
  width: 100%;
  padding: 12px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`

export const Table = styled.View`
  padding: 0 16px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-color: #cccccc;
  border-bottom-width: 1px;
`

export const Col = styled.Text`
  width: ${props => props.width}%;
  font-size: 16px;
  ${props => (props.align ? 'text-align: ' + props.align : null)};
`
