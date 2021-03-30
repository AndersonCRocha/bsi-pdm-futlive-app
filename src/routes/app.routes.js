import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DrawerLayout } from 'react-native-gesture-handler'

import { useAuth } from '../contexts/auth'
import { useTheme } from '../hooks/useTheme'

import Feed from '../pages/Feed'
import SignOut from '../components/SignOut'
import MenuToggle from '../components/MenuToggle'
import { useRef } from 'react'
import Aside from '../components/Aside'

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
      <AppStack.Navigator>
        <AppStack.Screen
          name={`Olá, ${user.name}!`}
          component={Feed}
          options={{
            headerStyle: {
              backgroundColor: theme.green,
            },
            headerTintColor: theme.black,
            headerTitleAlign: 'center',
            headerLeft: renderMenuToggle,
            headerRight: () => <SignOut />,
          }}
        />
      </AppStack.Navigator>
    </DrawerLayout>
  )
}

export default AppRoutes
