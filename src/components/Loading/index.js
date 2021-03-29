import React, { useRef, useEffect } from 'react'
import { Animated, Easing } from 'react-native'

import {
  Ball,
  BallWrapper,
  LoadingWrapper,
  Shadow,
  TextWrapper,
} from './styles'

import ball from '../../assets/images/ic_launcher_round.png'

const KickAnimation = props => {
  const animation = useRef(new Animated.Value(0)).current

  const translateY = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [8, -100, 8],
  })

  useEffect(() => {
    function animate() {
      animation.setValue(0)

      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        easing: Easing.circle,
        useNativeDriver: true,
      }).start(() => animate())
    }

    animate()
  }, [animation])

  return (
    <Animated.View
      style={{
        ...props.style,
        elevation: 9999,
        transform: [{ translateY }],
      }}
    >
      {props.children}
    </Animated.View>
  )
}

const ScaleAnimation = props => {
  const animation = useRef(new Animated.Value(0)).current

  const scaleX = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  })

  useEffect(() => {
    function animate() {
      animation.setValue(0)

      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        easing: Easing.circle,
        useNativeDriver: true,
      }).start(() => animate())
    }

    animate()
  }, [animation])

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ scaleX }],
      }}
    >
      {props.children}
    </Animated.View>
  )
}

const Loading = () => {
  return (
    <LoadingWrapper>
      <BallWrapper>
        <KickAnimation>
          <Ball source={ball} />
        </KickAnimation>
        <ScaleAnimation>
          <Shadow style={{ borderRadius: 60, transform: [{ scaleX: 5 }] }} />
        </ScaleAnimation>
      </BallWrapper>

      <TextWrapper>Carregando ...</TextWrapper>
    </LoadingWrapper>
  )
}

export default Loading
