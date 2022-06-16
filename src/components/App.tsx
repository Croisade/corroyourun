// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AuthRouter from './Auth/AuthRouter';
import RunsScreen from './Runs/RunsScreen';

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text>You clicked {count} times</Text>
//       <Button onPress={() => setCount(count + 1)} title="Click me!" />
//     </View>
//   );
// };

// React Native Styles

const HelloWorldApp = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.root}>
        {/* <RunsScreen /> */}
        <AuthRouter />
      </SafeAreaView>
      {/* <MainContainer /> */}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#F9FBFC',
  },
});
export default HelloWorldApp;
