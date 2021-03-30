import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '../../hooks/useTheme'

import { ToggleWrapper } from './styles'

const MenuToggle = ({ openDrawer }) => {
  const theme = useTheme()

  return (
    <ToggleWrapper>
      <Icon size={24} name="bars" color={theme.black} onPress={openDrawer} />
    </ToggleWrapper>
  )
}

export default MenuToggle
