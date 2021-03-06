// React Native Counter Example using Hooks!

import React from 'react'
import {StyleSheet, StatusBar} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {COLORS} from '@/components/theme'
import FlashMessage from 'react-native-flash-message'
import AuthRouter from './Auth/AuthRouter'

const HelloWorldApp = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.root}>
        <AuthRouter />
      </SafeAreaView>
      <FlashMessage position="top" />
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
})
export default HelloWorldApp
