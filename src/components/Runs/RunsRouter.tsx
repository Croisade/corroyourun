import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import RunsScreen from '@/components/Runs/RunsScreen';
import TimerScreen from '@/components/Runs/TimerScreen';
import SummaryScreen from '@/components/Runs/SummaryScreen';

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
        name="Summary"
        component={SummaryScreen}
        options={{title: 'Timer', headerTransparent: true}}
      />
    </RunsStack.Navigator>
  );
}
