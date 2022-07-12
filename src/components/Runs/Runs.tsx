import React from 'react'
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Pressable,
} from 'react-native'
import {COLORS} from '@/components/theme'
import {fromIsoToDateString, getYearMonthDay} from '@/utils/date'

import {useNavigation} from '@react-navigation/native'

type CreatedAt = {
  T: number
  I: number
}

type UpdatedAt = {
  T: number
  I: number
}

export type Runs = {
  speed: number
  time: string
  distance: number
  lap: number
  incline: number
  runId: string
  accountId: string
  createdAt: string
  updatedAt: string
}

export default function Runs({
  runs,
  isFocused = false,
}: {
  runs: Runs
  isFocused?: boolean
}) {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('Summary', {
      distance: runs.distance,
      speed: runs.speed,
      time: runs.time,
      lap: runs.lap,
      incline: runs.incline,
      runExist: true,
      runId: runs.runId,
    })
  }

  const createdAt = fromIsoToDateString(runs.createdAt)

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
          {/* Run August 7th, 2022 */}
          {createdAt}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>Distance</Text>
          </View>
          <View style={{flex: 0}}>
            <Text style={styles.text}>
              {runs.distance ? runs.distance.toString() : ''}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>Speed</Text>
          </View>
          <View style={{flex: 0}}>
            <Text style={styles.text}>
              {runs.speed ? runs.speed.toString() : ''}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.text}>Time</Text>
          </View>
          <View style={{flex: 0}}>
            <Text style={styles.text}>{runs.time}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
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
})
