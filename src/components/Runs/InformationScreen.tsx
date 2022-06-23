import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

import Button from '@/components/Common/Button';

export default function InformationScreen({route, navigation}) {
  const {time} = route.params;
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Timer</Text>
      {console.log(time)}

      <View
        style={{
          width: 260,
          height: 45,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.highlight,
            borderRadius: 300,
            width: 260,
            height: 36,
          }}>
          <View style={styles.sliderBarBorderUnfocused}>
            <Text style={styles.sliderBarUnfocused}>Walk</Text>
          </View>

          <View style={styles.sliderBarBorderFocused}>
            <Text style={styles.sliderBarFocused}>Run</Text>
          </View>

          <View style={styles.sliderBarBorderUnfocused}>
            <Text style={styles.sliderBarUnfocused}>Bike</Text>
          </View>
        </View>
      </View>

      <View style={styles.timer}>
        <Text style={styles.timerText}>{time}</Text>
      </View>
      <View>
        <Text>Distance</Text>
        <Text>Speed</Text>
        <Text>Lap</Text>
        <Text>Incline</Text>
        <Button onPress={() => {}} text="Done" type="PRIMARY" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    height: '100%',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.text,
    paddingBottom: 34,
    paddingTop: 62,
  },
  timer: {
    width: 210,
    height: 66,
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  text: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 7,
  },
  horizontalRule: {
    paddingTop: 10,
    borderBottomColor: COLORS.muted,
    borderBottomWidth: 2,
  },

  sliderBarBorderFocused: {
    // backgroundColor: COLORS.primary,
    height: 45,
    width: 90,
    borderRadius: 300,
    border: 5,
    borderColor: COLORS.primary,
    // borderWidth: 5,
    backgroundColor: COLORS.primary,
    marginTop: -4,
  },
  sliderBarFocused: {
    color: COLORS.background,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  sliderBarUnfocused: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    alignSelf: 'center',
  },
  sliderBarBorderUnfocused: {
    backgroundColor: COLORS.background,
    borderRadius: 300,
    borderColor: COLORS.primary,
    borderWidth: 2,
    width: 80,
    height: 36,
  },
});
