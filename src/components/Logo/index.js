import React from 'react'

import { LogoImage, LogoText, LogoWrapper } from './styles'

import logo from '../../assets/images/ic_launcher_round.png'

const sizesImage = {
  small: '30px',
  medium: '50px',
  large: '80px',
}

const Logo = ({ hideName = false, direction = 'column', size }) => {
  return (
    <LogoWrapper direction={direction}>
      <LogoImage source={logo} size={sizesImage[size]} />
      {!hideName && <LogoText>FutLive</LogoText>}
    </LogoWrapper>
  )
}

export default Logo
