import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import ProfileScreen from '@/components/Settings/ProfileScreen'
import SettingsScreen from '@/components/Settings/SettingsScreen'

export default function SettingsRouter() {
  const SettingsStack = createStackNavigator()
  return (
    <SettingsStack.Navigator
      initialRouteName="SettingsHome"
      screenOptions={{headerShown: true}}>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Settings', headerTransparent: true}}
      />
    </SettingsStack.Navigator>
  )
}
