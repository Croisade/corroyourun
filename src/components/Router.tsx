import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '@/routes';

// Screens
import RunsScreen from '@/components/Runs/RunsScreen';
import RunsRouter from '@/components/Runs/RunsRouter';
import CalendarScreen from '@/components/Calendar/CalendarScreen';
import TrackingScreen from '@/components/Tracking/TrackingScreen';
import SettingsScreen from '@/components/Settings/SettingsScreen';
import SettingsRouter from '@/components/Settings/SettingsRouter';
import {COLORS} from '@/components/theme';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={routes.RUNS}
        screenOptions={({route}) => ({
          // containerStyle: {backgroundColor: COLORS.background},
          // backgroundColor: COLORS.background,
          tabBarStyle: {backgroundColor: COLORS.highlight},
          headerShown: false,
          tabBarIcon: () => {
            let iconName = '';
            let rn = route.name;

            if (rn === routes.RUNS) {
              iconName = 'run';
            } else if (rn === routes.CALENDAR) {
              iconName = 'calendar';
            } else if (rn === routes.TRACKING) {
              iconName = 'chart-timeline-variant';
            } else if (rn === routes.SETTINGS) {
              iconName = 'account-settings';
            }
            // return <Icon name="comments" size={30} color="#900" />;
            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={COLORS.secondary} />;
          },
        })}>
        <Tab.Screen name={routes.RUNS} component={RunsRouter} />
        <Tab.Screen name={routes.CALENDAR} component={CalendarScreen} />
        <Tab.Screen name={routes.TRACKING} component={TrackingScreen} />
        <Tab.Screen name={routes.SETTINGS} component={SettingsRouter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
