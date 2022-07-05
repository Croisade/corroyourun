import {COLORS} from '@/components/theme'
import {LogBox, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Timer} from 'react-native-element-timer'
import Button from '@/components/Common/Button'
import React, {useRef} from 'react'
import useState from 'react-usestateref'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function TimerScreen({route, navigation}) {
  const [hasStarted, setHasStarted] = useState(false)
  const [time, setTime, timeRef] = useState<number>()
  const [status, setStatus] = useState(false)

  const timerRef = useRef<any>(null)
  LogBox.ignoreLogs([
    /NativeEventEmitter/, // react-native-webrtc
  ])

  const handleTimerStart = () => {
    timerRef.current.start()
    setHasStarted(true)
  }

  const handleTimerResume = () => {
    timerRef.current.resume()
  }

  const handleTimerPause = () => {
    timerRef.current.pause()
  }

  const handleTimerStop = () => {
    timerRef.current.stop()
  }

  const handleTimerEnd = (t: number) => {
    setTime(t)
    setHasStarted(false)
    navigation.navigate('Summary', {time: timeRef.current})
  }

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Timer</Text>
      <Timer
        ref={timerRef}
        style={styles.timer}
        textStyle={styles.timerText}
        formatTime="hh:mm:ss"
        onTimes={_e => {}}
        onPause={_e => {}}
        onEnd={t => handleTimerEnd(t)}
      />

      <View style={{flexDirection: 'row', width: 150, alignSelf: 'center'}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={hasStarted ? handleTimerResume : handleTimerStart}>
          <Icon name="play" size={60} color={COLORS.text} />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 0}} onPress={handleTimerPause}>
          <Icon name="pause" size={60} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <View style={{width: 200, alignSelf: 'center', paddingBottom: 30}}>
        <Button
          text="Done"
          onPress={handleTimerStop}
          type="PRIMARY"
          isRounded={true}
        />
      </View>
    </View>
  )
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
    marginVertical: 10,
  },
  timerText: {
    fontSize: 96,
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
  footer: {
    color: COLORS.text,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
})
