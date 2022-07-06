import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native'
import {COLORS} from '@/components/theme'
import {Formik} from 'formik'
import Button from '@/components/Common/Button'
import {createRun, updateRun} from '@/api/runs'
import {showMessage} from 'react-native-flash-message'
import {
  setIsUpdatedFalse,
  setIsUpdatedTrue,
  setIsUpdatedUpdated,
  setIsUpdatedUpdating,
} from '@/redux/runSlice'
import {useDispatch} from 'react-redux'

export default function InformationScreen({route, navigation}) {
  //@TODO include which rtype of run in the api call
  const [walkFocus, setWalkFocus] = useState(false)
  const [runFocus, setRunFocus] = useState(true)
  const [bikeFocus, setBikeFocus] = useState(false)

  const dispatch = useDispatch()

  const handleWalkPress = () => {
    setWalkFocus(true)
    setRunFocus(false)
    setBikeFocus(false)
  }

  const handleRunPress = () => {
    setWalkFocus(false)
    setRunFocus(true)
    setBikeFocus(false)
  }

  const handleBikePress = () => {
    setWalkFocus(false)
    setRunFocus(false)
    setBikeFocus(true)
  }

  const {
    time,
    distance,
    speed,
    lap,
    incline,
    runExist = false,
    runId,
  }: {
    time: string
    distance: number
    speed: number
    lap: number
    incline: number
    runExist?: boolean
    runId?: string
  } = route.params

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.header}>Summary</Text>

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
            {walkFocus ? (
              <View style={styles.sliderBarBorderFocused}>
                <Text style={styles.sliderBarFocused}>Walk</Text>
              </View>
            ) : (
              <Pressable onPress={handleWalkPress}>
                <View style={styles.sliderBarBorderUnfocused}>
                  <Text style={styles.sliderBarUnfocused}>Walk</Text>
                </View>
              </Pressable>
            )}

            {runFocus ? (
              <View style={styles.sliderBarBorderFocused}>
                <Text style={styles.sliderBarFocused}>Run</Text>
              </View>
            ) : (
              <Pressable onPress={handleRunPress}>
                <View style={styles.sliderBarBorderUnfocused}>
                  <Text style={styles.sliderBarUnfocused}>Run</Text>
                </View>
              </Pressable>
            )}

            {bikeFocus ? (
              <View style={styles.sliderBarBorderFocused}>
                <Text style={styles.sliderBarFocused}>Bike</Text>
              </View>
            ) : (
              <Pressable onPress={handleBikePress}>
                <View style={styles.sliderBarBorderUnfocused}>
                  <Text style={styles.sliderBarUnfocused}>Bike</Text>
                </View>
              </Pressable>
            )}
          </View>
        </View>

        <View style={styles.timer}>
          <Text style={styles.timerText}>{time}</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Formik
            initialValues={{
              distance: distance ? distance.toString() : '',
              speed: speed ? speed.toString() : '',
              lap: lap ? lap.toString() : '',
              incline: incline ? incline.toString() : '',
            }}
            onSubmit={async (values, {setSubmitting}) => {
              const timeString = time.toString()
              try {
                dispatch(setIsUpdatedUpdating())
                runExist
                  ? await updateRun({
                      runId: runId!,
                      speed:
                        typeof values.speed === 'string'
                          ? parseFloat(values.speed)
                          : values.speed,
                      lap:
                        typeof values.lap === 'string'
                          ? parseInt(values.lap, 10)
                          : values.lap,
                      incline:
                        typeof values.incline === 'string'
                          ? parseFloat(values.incline)
                          : values.incline,
                      distance:
                        typeof values.distance === 'string'
                          ? parseFloat(values.distance)
                          : values.distance,
                      time: timeString,
                    })
                  : await createRun({
                      speed:
                        typeof values.speed === 'string'
                          ? parseFloat(values.speed)
                          : values.speed,
                      lap:
                        typeof values.lap === 'string'
                          ? parseInt(values.lap, 10)
                          : values.lap,
                      incline:
                        typeof values.incline === 'string'
                          ? parseFloat(values.incline)
                          : values.incline,
                      distance:
                        typeof values.distance === 'string'
                          ? parseFloat(values.distance)
                          : values.distance,
                      time: timeString,
                    })
                setSubmitting(false)
              } catch (error) {
                showMessage({
                  message: 'Failed to Submit Summary:',
                  // @ts-ignore
                  description: error.message,
                  type: 'danger',
                })
              }

              navigation.navigate('RunsHome')
              dispatch(setIsUpdatedUpdated())
            }}>
            {({handleBlur, handleSubmit, values, setFieldValue}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                  <View style={styles.formView}>
                    <Text style={styles.text}>Distance</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={value => setFieldValue('distance', value)}
                      onBlur={handleBlur('distance')}
                      value={values.distance}
                      placeholder="Distance"
                    />
                  </View>
                  <View style={styles.formView}>
                    <Text style={styles.text}>Speed</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={value => setFieldValue('speed', value)}
                      onBlur={handleBlur('speed')}
                      value={values.speed}
                      placeholder="Speed"
                    />
                  </View>
                  <View style={styles.formView}>
                    <Text style={styles.text}>Lap</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={value => setFieldValue('lap', value)}
                      onBlur={handleBlur('lap')}
                      value={values.lap}
                      placeholder="Lap"
                    />
                  </View>
                  <View style={styles.formView}>
                    <Text style={styles.text}>Incline</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={value => setFieldValue('incline', value)}
                      onBlur={handleBlur('incline')}
                      value={values.incline}
                      placeholder="Incline"
                    />
                  </View>

                  <Button onPress={handleSubmit} text="Done" type="PRIMARY" />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    // height: '100%',
    flexDirection: 'column',
    // flexGrow: 1,
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
  input: {
    color: 'black',
    borderColor: COLORS.muted,
    width: 90,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  formView: {
    flexDirection: 'row',
    width: 265,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  timer: {
    width: 210,
    height: 75,
    alignItems: 'center',
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
  sliderBarBorderFocused: {
    height: 45,
    width: 90,
    borderRadius: 300,
    border: 5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    marginTop: -4,
  },
  sliderBarFocused: {
    color: COLORS.background,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingTop: 6,
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
})
