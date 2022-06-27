import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import ConfirmEmailScreen from './ConfirmEmailScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import ResetPasswordScreen from './ResetPasswordScreen'
import Router from '@/components/Router'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Home" component={Router} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
