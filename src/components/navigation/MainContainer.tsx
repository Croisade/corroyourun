import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Screens
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SettingsScreen from '../screens/SettingsScreenExample'

//Screen names
const homeName = 'Home'
const detailsName = 'Details'
const settingsName = 'Settings'

const Tab = createBottomTabNavigator()

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName = ''
            let rn = route.name

            if (rn === homeName) {
              iconName = 'run'
            } else if (rn === detailsName) {
              iconName = 'calendar'
            } else if (rn === settingsName) {
              iconName = 'chart-timeline-variant'
            }
            // return <Icon name="comments" size={30} color="#900" />;
            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color="#900" />
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer
