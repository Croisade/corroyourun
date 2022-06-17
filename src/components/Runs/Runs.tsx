import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {COLORS} from '@/components/theme';

export default function HomeScreen() {
  const {height} = useWindowDimensions();

  return (
    <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
      <View style={styles.runContainer}>
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
    </View>
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
    borderColor: '#CC4C33',
    borderWidth: 1,
    paddingLeft: 17,
    paddingRight: 17,
  },
});
