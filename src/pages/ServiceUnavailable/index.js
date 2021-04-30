import React from 'react'
import { Button } from 'react-native'
import { Message, MessageWrapper } from './styles'

function ServiceUnavailable({ navigation, route }) {
  const { targetRoute } = route.params

  return (
    <MessageWrapper>
      <Message>O servidor está indisponível no momento.</Message>
      <Message>Tente novamente mais tarde!</Message>
      <Button
        onPress={() => {
          navigation.navigate(targetRoute)
        }}
        title="Tentar novamente"
      />
    </MessageWrapper>
  )
}

export default ServiceUnavailable
