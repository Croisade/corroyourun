//@ts-nocheck
import React from 'react'
import {Text, StyleSheet, Pressable} from 'react-native'

export default function Button({onPress, text, type, isRounded = false}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        isRounded && {borderRadius: 30},
      ]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
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
    backgroundColor: '#CC4C33',
  },

  container_SECONDARY: {
    borderColor: '#CC4C33',
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: '#CC4C33',
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'grey',
  },
})
