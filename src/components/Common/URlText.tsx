//@ts-nocheck
import React, {useCallback} from 'react'
import {Text, StyleSheet, Pressable, Linking} from 'react-native'
import {COLORS} from '@/components/theme'

export default function URLText({text, url}) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.container,
        // styles[`container_${type}`],
        // isRounded && {borderRadius: 30},
      ]}>
      <Text style={[styles.text]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  text: {
    color: COLORS.text,
    marginBottom: 20,
  },
})
