import React, { useRef } from 'react'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { DrawerLayout } from 'react-native-gesture-handler'

import { useAuth } from '../contexts/auth'
import { useTheme } from '../hooks/useTheme'

import Aside from '../components/Aside'
import MenuToggle from '../components/MenuToggle'

import Feed from '../pages/Feed'
import GameDetails from '../pages/GameDetails'

const AppStack = createStackNavigator()

const AppRoutes = () => {
  const { user } = useAuth()
  const theme = useTheme()
  const menuRef = useRef(null)

  function renderMenuToggle() {
    return <MenuToggle openDrawer={() => menuRef.current.openDrawer()} />
  }

  return (
    <DrawerLayout
      ref={menuRef}
      drawerPosition={DrawerLayout.positions.Left}
      drawerType="slide"
      drawerBackgroundColor="#ddd"
      renderNavigationView={() => (
        <Aside closeDrawer={() => menuRef.current.closeDrawer()} />
      )}
    >
      <AppStack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: theme.green,
          },
          headerLeft: renderMenuToggle,
          headerTintColor: theme.black,
          headerTitleAlign: 'center',
          headerRight: () => <HeaderBackButton onPress={navigation.goBack} />,
        })}
      >
        <AppStack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: `Olá, ${user.name}!`,
            headerRight: null,
          }}
        />
        <AppStack.Screen
          name="Detalhes"
          component={GameDetails}
          options={{ headerTitle: 'Detalhes do jogo' }}
        />
      </AppStack.Navigator>
    </DrawerLayout>
  )
}

export default AppRoutes
