import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

export default function TrackingScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    height: '100%',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.text,
    paddingBottom: 34,
    paddingTop: 15,
  },
});
