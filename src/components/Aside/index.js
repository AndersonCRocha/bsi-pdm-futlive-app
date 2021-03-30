import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '../../hooks/useTheme'

import { AsideItem, AsideWrapper, TextItem } from './styles'
import Logo from '../Logo'

const Aside = ({ onPressItem, closeDrawer }) => {
  const theme = useTheme()

  return (
    <AsideWrapper>
      <ScrollView>
        <Logo direction="row" size="small" />
        <AsideItem onPress={closeDrawer}>
          <TextItem>Esconder menu</TextItem>
          <Icon name="arrow-left" size={20} color={theme.black} />
        </AsideItem>
      </ScrollView>
    </AsideWrapper>
  )
}

export default Aside
