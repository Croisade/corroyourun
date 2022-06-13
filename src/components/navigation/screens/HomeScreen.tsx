import React from 'react';
import {View, Text, Alert} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() =>
          Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home!
      </Text>
    </View>
  );
}
