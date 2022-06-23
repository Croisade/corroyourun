import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import RunsScreen from '@/components/Runs/RunsScreen';
import TimerScreen from '@/components/Runs/TimerScreen';
import InformationScreen from '@/components/Runs/InformationScreen';

export default function RunsRouter() {
  const RunsStack = createStackNavigator();
  return (
    <RunsStack.Navigator
      initialRouteName="RunsHome"
      screenOptions={{headerShown: true}}>
      <RunsStack.Screen
        name="RunsHome"
        component={RunsScreen}
        options={{headerShown: false}}
      />
      <RunsStack.Screen
        name="Timer"
        component={TimerScreen}
        options={{title: 'Start', headerTransparent: true}}
      />
      <RunsStack.Screen
        name="Information"
        component={InformationScreen}
        options={{title: 'Information', headerTransparent: true}}
      />
    </RunsStack.Navigator>
  );
}
