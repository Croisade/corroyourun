//@ts-nocheck
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function Button({onPress, text, type}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3871F3',
  },

  container_SECONDARY: {
    borderColor: '#3871F3',
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: '#3871F3',
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'grey',
  },
});
