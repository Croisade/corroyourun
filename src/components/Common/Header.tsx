import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#3D2C29',
    paddingBottom: 34,
    paddingTop: 15,
  },
})
