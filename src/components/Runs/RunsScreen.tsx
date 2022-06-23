import React from 'react';
import {View, Text, Alert, StyleSheet, useWindowDimensions} from 'react-native';
import Runs from './Runs';
import Button from '../Common/Button';
import {COLORS} from '@/components/theme';

export default function HomeScreen({navigation}) {
  const {height} = useWindowDimensions();
  const onRunButtonPressed = () => {
    navigation.navigate('Timer');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logoPlaceholder}>CorroYouRun</Text>
      </View>
      <Text>History</Text>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Runs />
        <Runs />
        <Runs />
        <Runs />
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
    </View>
  );
}

// top: {
//   flex: 0.3,
//   backgroundColor: '#CC4C33',
//   borderWidth: 5,
//   maxHeight: 200,
// },

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    height: '100%',
    // padding: 20,
    // margin: 10,
  },
  top: {
    // flex: 0.3,
    // backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    borderColor: '#CC4C33',
    borderWidth: 1,
    paddingLeft: 17,
    paddingRight: 17,
  },
});
