import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text} from 'react-native';

export default function DetailsScreen({navigation}) {
  const SettingsStack = createStackNavigator();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Details Screen
      </Text>
    </View>
  );
}
