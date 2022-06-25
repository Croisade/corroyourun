import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Pressable,
} from 'react-native';
import {COLORS} from '@/components/theme';

import {useNavigation} from '@react-navigation/native';

export default function Runs({isFocused = false}) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Summary', {
      distance: '3.2',
      speed: '6',
      time: '26:00',
      lap: '0',
      incline: '1',
    });
  };

  return (
    <Pressable
      style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}
      onPress={handlePress}>
      <View
        style={[
          styles.runContainer,
          isFocused && {borderColor: COLORS.primary},
        ]}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>
          Run August 7th, 2022
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>Distance</Text>
          </View>
          <View style={{flex: 0}}>
            <Text style={styles.text}>3.2m</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>Pace</Text>
          </View>
          <View style={{flex: 0}}>
            <Text style={styles.text}>6 mph</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>Time</Text>
          </View>
          <View style={{flex: 0}}>
            <Text style={styles.text}>26:00</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 20,
    // margin: 10,
  },
  top: {
    // flex: 0.3,
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#CC4C33',
    borderWidth: 5,
    maxHeight: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    color: '#CC4C33',
    fontWeight: 'bold',
    fontSize: 37,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: '#3D2C29',
    paddingBottom: 5,
  },
  runContainer: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.highlight,
    borderWidth: 1,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 5,
  },
});
