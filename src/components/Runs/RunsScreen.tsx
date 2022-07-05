import React, {useEffect} from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import Runs from './Runs'
import Button from '../Common/Button'
import {COLORS} from '@/components/theme'
import {fetchRuns, createRun} from '@/api/runs'

import {setIsUpdatedTrue, setIsUpdatedFalse} from '@/redux/runSlice'

import useState from 'react-usestateref'
import {useDispatch, useSelector} from 'react-redux'

export default function HomeScreen({route, navigation}) {
  const [runs, setRuns] = useState([])

  const runIsUpdated = useSelector(state => state.run.isUpdated)
  const dispatch = useDispatch()
  const {height} = useWindowDimensions()
  const [updated, setIsUpdated, updatedRef] = useState(false)

  const onRunButtonPressed = () => {
    navigation.navigate('Timer')
  }

  // setIsUpdated(isUpdated)
  console.log(runIsUpdated)
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedRuns = await fetchRuns()
        setRuns(fetchedRuns.data)
      } catch (error) {
        console.log(error.response.data)
      }
    }

    fetchData()
    dispatch(setIsUpdatedFalse())
  }, [dispatch, runIsUpdated, setIsUpdated])

  return (
    <ScrollView style={[styles.container, {height: height}]}>
      <View style={styles.top}>
        <Text style={styles.logoPlaceholder}>CorroYouRun</Text>
      </View>
      <Text style={{backgroundColor: COLORS.background}}>History</Text>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        {/* if (runs)
        {runs.map(run => (
          <Runs runs={run} />
        ))} */}

        {runs.slice(0, 4).map(run => (
          <Runs runs={run} key={run.runId} />
        ))}
        {/* <Runs />
        <Runs />
        <Runs />
        <Runs /> */}
        <View
          style={{
            alignSelf: 'center',
            width: 200,
          }}>
          <Button
            onPress={onRunButtonPressed}
            text={'Start'}
            type={'PRIMARY'}
            isRounded={true}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    height: '100%',
  },
  top: {
    // flex: 0.3,
    // backgroundColor: '#fff',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#CC4C33',
    borderWidth: 5,
    maxHeight: 75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    color: '#CC4C33',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
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
    backgroundColor: '#fff',
    borderColor: '#CC4C33',
    borderWidth: 1,
    paddingLeft: 17,
    paddingRight: 17,
  },
})
