import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '../../hooks/useTheme'

import { AsideItem, AsideWrapper, TextItem } from './styles'
import Logo from '../Logo'
import SignOut from '../SignOut'

const Aside = ({ closeDrawer }) => {
  const theme = useTheme()

  return (
    <AsideWrapper>
      <ScrollView>
        <Logo direction="row" size="small" />

        <AsideItem onPress={closeDrawer}>
          <TextItem>Esconder menu</TextItem>
          <Icon name="arrow-left" size={20} color={theme.black} />
        </AsideItem>
        <AsideItem onPress={closeDrawer}>
          <TextItem>Jogos da semana</TextItem>
          <Icon name="futbol-o" size={20} color={theme.black} />
        </AsideItem>
        <AsideItem onPress={closeDrawer}>
          <TextItem>Jogos ao vivo</TextItem>
          <Icon name="tv" size={20} color={theme.black} />
        </AsideItem>

        <SignOut />
      </ScrollView>
    </AsideWrapper>
  )
}

export default Aside
